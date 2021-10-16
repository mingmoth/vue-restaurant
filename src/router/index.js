import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants'
import NotFound from '../views/NotFound.vue'
import store from '../store'

Vue.use(VueRouter)

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if(currentUser && !currentUser.isAdmin) {
    next('/404')
    return
  }
  next()
}

const router = new VueRouter({
  //「當前頁籤」的樣式
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/signin'
    },
    {
      path: '/signin',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'sign-up',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: Restaurants
    },
    {
      path: '/restaurants/feeds',
      name: 'restaurants-feeds',
      component: () => import('../views/RestaurantsFeeds.vue')
    },
    {
      path: '/restaurants/top',
      name: 'restaurants=top',
      component: () => import('../views/RestaurantsTop.vue')
    },
    {
      path: '/users/top',
      name: 'users-top',
      component: () => import('../views/UsersTop.vue')
    },
    {
      path: '/users/:id',
      name: 'user',
      component: () => import('../views/User.vue')
    },
    {
      path: '/restaurants/:id',
      name: 'restaurant',
      component: () => import('../views/Restaurant.vue')
    },
    {
      path: '/restaurants/:id/dashboard',
      name: 'restaurant-dashboard',
      component: () => import('../views/RestaurantDashboard.vue')
    },
    {
      path: '/admin',
      exact: true,
      redirect: '/admin/restaurants'
    },
    {
      path: '/admin/restaurants',
      name: 'admin-restaurants',
      component: () => import('../views/AdminRestaurants.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/admin/restaurants/new',
      name: 'admin-restaurants-new',
      component: () => import('../views/AdminRestaurantNew.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/admin/restaurants/:id',
      name: 'admin-restaurant',
      component: () => import('../views/AdminRestaurant.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/admin/restaurants/:id/edit',
      name: 'admin-restaurant-edit',
      component: () => import('../views/AdminRestaurantEdit.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/admin/categories',
      name: 'admin-categories',
      component: () => import('../views/AdminCategories.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/admin/users',
      name: 'admin-users',
      component: () => import('../views/AdminUsers.vue'),
      beforeEnter: authorizeIsAdmin
    },
    {
      path: '/users/:id/edit',
      name: 'users-edit',
      component: () => import('../views/UsersEdit.vue')
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    },
  ]
})
// Vue Router 提供了 beforeEach 方法，用來監聽全域的「切換路由」事件
router.beforeEach(async(to, from, next) => {
  // console.log('to', to)
  // console.log('from', from)
  // 呼叫 actions 方法的關鍵字是 dispatch，表示分發、指派的意思
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token
  let isAuthenticated = store.state.isAuthenticated

  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    // 取得驗證成功與否
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  // 對於不需要驗證 token 的頁面
  const passAuthentication = ['sign-in', 'sign-up']

  // 如果 token 無效且進入需要驗證的頁面則轉址到登入頁
  if (!isAuthenticated && !passAuthentication.includes(to.name)) {
    next('/signin')
  }
  // 如果 token 有效且進入不需要驗證到頁面則轉址到餐廳首頁
  if (isAuthenticated && passAuthentication.includes(to.name)) {
    next('/restaurants')
  }
  next()

    ()
})

export default router

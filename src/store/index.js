import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from '../apis/users'
Vue.use(Vuex)

export default new Vuex.Store({
  // 像 Vue script 的 data
  // 在 data 屬性定義的資料，只有該元件可以使用
  // 在 state 屬性中的資料，每個 Vue 元件都可以使用
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false,
    // 若在 local storage 中的 token 沒有變更的話，就不需要再重複驗證。
    // 新增 token 屬性
    token:''
  },
  // 用來修改 state的方法
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 透過API取得覆蓋
        ...currentUser
      }
      // // 將使用者驗證用的 token 儲存在 state 中
      state.token = localStorage.getItem('token')
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      localStorage.removeItem('token')
      state.token = ''
    }
  },
  // 透過API請求資料
  // 設定其他的非同步函式，例如發送 API 請求等等。
  actions: {
    async fetchCurrentUser({commit}) {
      try {
        // 呼叫 usersAPI.getCurrentUser() 方法，並將 response 顯示出來
        // const response = await usersAPI.getCurrentUser()
        const {data} = await usersAPI.getCurrentUser()
        const {id, name, email, image, isAdmin} = data
        commit('setCurrentUser', {id, name, email, image, isAdmin})
        return true
      } catch (error) {
        console.log(error)
        console.error('can not fetch user info')
        // 驗證失敗的話一併觸發登出的行為，以清除 state 中的 token
        commit('revokeAuthentication')
        return false
      }
    }
  },
  modules: {
  }
})

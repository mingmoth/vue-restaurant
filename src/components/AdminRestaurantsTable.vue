<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
          >
            Show
          </router-link>

          <router-link :to="{name: 'admin-restaurant-edit', params: {id: restaurant.id}}" class="btn btn-link">Edit</router-link>

          <button
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
            type="button" 
            class="btn btn-link">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import adminAPI from '../apis/admin'
import{Toast} from '../utils/helpers'
export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    async fetchRestaurants() {
      try {
        const {data} = await adminAPI.restaurants.get()
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        this.restaurants = data.restaurants
      } catch (error) {
        console.log(error)
        Toast.fire({
          ison: 'error',
          title: '無法取得餐廳資訊，請稍後再試'
        })
      }
    },
    async deleteRestaurant(restaurantId) {
      try {
        const {data} = await adminAPI.restaurants.delete({restaurantId})
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        this.restaurants = this.restaurants.filter(restaurant => restaurant.id !== restaurantId)
        
        Toast.fire({
          ison: 'success',
          title: '成功刪除此餐廳資訊'
        })
      } catch (error) {
        console.log(error)
        Toast.fire({
          ison: 'error',
          title: '無法刪除此餐廳資訊，請稍後再試'
        })
      }
      
    }
  },
};
</script>

import { apiHelper } from "../utils/helpers";


export default {
  getRestaurants({page, categoryId}) {
    // 原生的 URLSearchParams() 方法，幫你把一組物件參數直接組成網址上的 queryString
    const searchParams = new URLSearchParams({page, categoryId})
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getFeeds() {
    return apiHelper.get(`/restaurants/feeds`)
  },
  getRestaurantsTop() {
    return apiHelper.get('/restaurants/top')
  },
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },
}
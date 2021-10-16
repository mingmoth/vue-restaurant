import { apiHelper } from "../utils/helpers";
// const getToken = () => localStorage.getItem('token')

export default {
  getCurrentUser() {
    return apiHelper.get(`/get_current_user`)
  },
  get({userId = ''} = {}) {
    return apiHelper.get(`/users/${userId}`)
  },
  getTopUsers() {
    return apiHelper.get('/users/top')
  },
  addFavorite({restaurantId}) {
    // 使用axios post會傳入3個參數(url網址, data要發送的資料，如果沒有則寫 null, config這裡可以把 token 帶到 headers 中)
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },
  deleteFavorite({restaurantId}) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addLike({restaurantId}) {
    return apiHelper.post(`/like/${restaurantId}`, null)
  },
  deleteLike({restaurantId}) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  addFollowing({userId}) {
    return apiHelper.post(`/following/${userId}`, )
  },
  deleteFollowing({userId}) {
    return apiHelper.delete(`/following/${userId}`)
  }
}
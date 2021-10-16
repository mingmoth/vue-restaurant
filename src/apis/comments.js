import { apiHelper } from "../utils/helpers";


export default {
  create({restaurantId, comment}) {
    return apiHelper.post('/comments', { restaurantId, comment})
  },
  delete({commentId}) {
    return apiHelper.delete(`/comments/${commentId}`)
  }
}
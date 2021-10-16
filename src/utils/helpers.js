import axios from 'axios'
import Swal  from 'sweetalert2'

const baseURL = 'https://forum-express-api.herokuapp.com/api'
const axiosInstance = axios.create({baseURL})

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    // 如果 token 存在的話，則帶入到 headers 當中
    if(token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  err => Promise.rejext(err)
)
export const apiHelper = axiosInstance
export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})
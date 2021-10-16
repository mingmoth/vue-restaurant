<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm
      :is-processing="isProcessing"
      @after-submit="handleAfterSubmit"/>
  </div>
</template>

<script>
import adminAPI from '../apis/admin'
import {Toast} from '../utils/helpers'
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'
export default {
  components: {
    AdminRestaurantForm
  },
  data() {
    return {
      isProcessing: false
    }
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true
        const { data } = await adminAPI.restaurants.create({ formData })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$router.push({ name: 'admin-restaurants' })

      } catch (error) {
        this.isProcessing = false
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法建立餐廳資訊，請稍後再試'
        })
      }
      // for(let[name, value] of formData.entries()) {
      //   console.log(name + ': ' + value)
      // }
    }
  }
}
</script>
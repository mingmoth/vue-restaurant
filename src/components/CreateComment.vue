<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>

<script>
// import { v4 as uuidv4 } from "uuid";
import commentsAPI from "../apis/comments";
import { Toast } from "../utils/helpers";
export default {
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if(!this.text) {
          Toast.fire({
            ixon: 'warning',
            title: '您尚未填寫評論'
          })
          return
        }
        const { data } = await commentsAPI.create({ restaurantId: this.restaurantId, comment: this.text });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.$emit("after-create-comment", {
          commentId: data.commentId,
          restaurantId: this.restaurantId,
          text: this.text,
        });
        Toast.fire({
          icon: "success",
          title: `成功新增${this.text}餐廳評論`
        })
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法新增評論資訊，請稍後再試",
        });
      }

      this.text = "";
    },
  },
};
</script>

<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>

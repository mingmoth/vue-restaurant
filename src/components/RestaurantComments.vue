<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          type="button"
          class="btn btn-danger float-right"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
          :disabled="isProcessing"
        >
          Delete
        </button>
        <h3>
          <a href="#">
            {{ comment.User.name }}
          </a>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
// import moment from 'moment'
import { fromNowFilter } from "../utils/mixin";
import commentsAPI from "../apis/comments";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  props: {
    restaurantComments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isProcessing: false
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  mixins: [fromNowFilter],
  // filters: {
  //   fromNow(datetime) {
  //     if(!datetime) {
  //       return '-'
  //     }
  //     return moment(datetime).fromNow()
  //   }
  // }
  methods: {
    async handleDeleteButtonClick(commentId) {
      try {
        this.isProcessing = true
        const { data } = await commentsAPI.delete({ commentId });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.$emit("after-delete-comment", commentId);
        Toast.fire({
          icon: "success",
          title: "移除評論成功",
        });
        this.isProcessing = false
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法刪除此評論，請稍後再試",
        });
        this.isProcessing = false
      }
    },
  },
};
</script>

<style scoped>
h2.my-4 {
  margin-bottom: 1rem !important;
  font-size: 18px;
}

h3 {
  margin-bottom: 3px;
  line-height: 1.3;
}

.blockquote-footer {
  font-size: 12.5px;
}
</style>
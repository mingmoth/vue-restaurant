<template>
  <div class="card">
    <div class="card-header">{{ followings.length }} Followings (追蹤中)</div>
    <div class="card-body">
      <router-link
        v-for="following in followings"
        :key="following.id"
        :to="{ name: 'user', params: { id: following.id } }"
      >
        <img
          :src="following.image"
          width="60"
          height="60"
          class="mr-1"
        >
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    followings: {
      type: Array,
      default: () => [],
    },
  },
  // data() {
  //  return {

  //   }
  // },
  // methods: {
  //   async fetchFollowings() {
  //     try {
  //       this
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  // }
};
</script>
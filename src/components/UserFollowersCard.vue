<template>
  <div class="card">
    <div class="card-header">{{ followers.length }} Followers (追蹤中)</div>
    <div class="card-body">
      <router-link
        v-for="follower in followers"
        :key="follower.id"
        :to="{ name: 'user', params: { id: follower.id } }"
      >
        <img
          :src="follower.image"
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
    followers: {
      type: Array,
      default: () => []
    }
  }
}
</script>
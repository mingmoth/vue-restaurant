<template>
  <div class="card">
    <div class="card-header">
      最新評論
    </div>
    <div v-for="comment in comments" :key="comment.id" class="card-body">
      <div>
        <h4>
          <router-link :to="{name: 'restaurant', params: {id: comment.Restaurant.id}}">
            {{comment.Restaurant ? comment.Restaurant.name: ''}}
          </router-link>
        </h4>
        <p>{{comment.text}}</p>by
        <a href="#">
          {{comment.User ? comment.User.name: ''}}
        </a>
        {{comment.createdAt | fromNow}}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
// import moment from 'moment'
import {fromNowFilter} from '../utils/mixin'
export default {
  props: {
    comments: {
      type: Array,
      required: true
    }
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
}
</script>
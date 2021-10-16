<template>
  <div class="card">
    <div class="card-header">
      最新餐廳
    </div>
    <div class="card-body">
      <div
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <h4>
          <router-link :to="{name: 'restaurant', params: {id: restuarnatId}}">{{restaurant.name}}</router-link>
          &nbsp;
          <small>{{restaurant.Category ? restaurant.Category.name : '未分類'}}
 </small>
        </h4>
        <p>{{restaurant.description}}</p>
        {{restaurant.createdAt | fromNow}}
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
    restaurants: {
      type: Array,
      required: true
    }
  },
  mixins: [fromNowFilter],
  // filters: {
  //   fromNow (datetime) {
  //     if(!datetime) {
  //       return '-'
  //     }
  //     return moment(datetime).fromNow()
  //   }
  // }
}
</script>

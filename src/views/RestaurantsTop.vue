<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px; margin: auto"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <a href="#" class="btn btn-primary mr-2">Show</a>

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>e>

<script>
import usersAPI from '../apis/users'
import restaurantsAPI from "../apis/restaurants";
import { Toast } from "../utils/helpers";
import NavTabs from "../components/NavTabs.vue";
export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    async fetchRestaurants() {
      try {
        const { data } = await restaurantsAPI.getRestaurantsTop();
        console.log(data);
        
        this.restaurants = data.restaurants;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得人氣餐廳資訊，請稍後再試",
        });
      }
    },
    async addFavorite(restaurantId) {
      try {
        const {data} = await usersAPI.addFavorite({restaurantId})

        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurants = this.restaurants.map((restaurant) => {
          if (restaurant.id !== restaurantId) {
            return restaurant;
          } else {
            return {
              ...restaurant,
              FavoriteCount: restaurant.FavoriteCount + 1,
              isFavorited: true,
            };
          }
        });
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon:'error',
          title: '無法對餐廳加入最愛，請稍後再試'
        })
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const {data} = await usersAPI.deleteFavorite({restaurantId})
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurants = this.restaurants.map((restaurant) => {
        if (restaurant.id !== restaurantId) {
          return restaurant;
        } else {
          return {
            ...restaurant,
            FavoriteCount: restaurant.FavoriteCount - 1,
            isFavorited: false,
          };
        }
      });
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon:'error',
          title: '無法對餐廳移除最愛，請稍後再試'
        })
      }
    },
  },
};
</script>
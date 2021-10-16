<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit" class="w-100">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcesssing"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "../apis/authorization";
import { Toast } from "../utils/helpers";
export default {
  data() {
    return {
      email: "",
      password: "",
      isProcesssing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "請輸入Email 或 password",
          });
          return;
        }
        this.isProcesssing = true;
        const response = await authorizationAPI.signIn({
          email: this.email,
          password: this.password,
        });
        console.log(response)
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        localStorage.setItem("token", data.token);

        // 透過setCurrentUser把使用者資料存到Vuex
        this.$store.commit('setCurrentUser', data.user)

        // 轉址到餐廳首頁
        this.$router.push("/restaurants");
      } catch (error) {
        this.password = "";
          Toast.fire({
            icon: "warning",
            title: "請輸入正確Email帳號及密碼",
          });
          this.isProcesssing = false;
          console.log("error", error);
      }
    },
  },
};
</script>
<template>
  <div class="container py-5">
    <form @submit="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="user.name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          width="200"
          height="200"
          alt=""
        />
        <input
          @change="handleFileChange"
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  data() {
    return {
      user: {
        id: 0,
        name: "",
        email: "",
        image: "",
        isAdmin: false,
      },
    };
  },
  methods: {
    created() {
      this.fetchUser()
    },
    fetchUser() {
      const {currentUser} = dummyUser
      const {id, name, email, image, isAdmin} = currentUser
      this.user = {id, name, email, image, isAdmin}
    },
    handleFileChange(e) {
      const files = e.target.files;
      console.log("files", files);
      if (files.length === 0) {
        this.user.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL
      }
    },
    handleSubmit(e) {
      const form = e.target;
      const formData = new FormData(form);
      this.$emit("after-submit", formData);
    },
  },
};
</script>
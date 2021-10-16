<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody v-for="user in users" :key="user.id">
        <tr>
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td v-if="user.isAdmin">admin</td>
          <td v-else>user</td>
          <td v-if="user.isAdmin">
            <button
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleUser(user.id)"
            >
              set as user
            </button>
          </td>
          <td v-else>
            <button
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleUser(user.id)"
            >
              set as Admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";
import { mapState } from 'vuex'
import AdminNav from "../components/AdminNav.vue";
export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
    };
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await adminAPI.users.get();
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.users = data.users.map((user) => ({
          ...user,
        }));
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資訊，請稍後再試'
        })
      }
    },
    async toggleUser({userId, isAdmin}) {
      try {
        const {data} = await adminAPI.users.toggle({userId, isAdmin: (!isAdmin).toString()})
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          };
        }
        //
        return user;
      });
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法變更使用者權限，請稍後再試'
        })
      }
      
    },
  },
};
</script>
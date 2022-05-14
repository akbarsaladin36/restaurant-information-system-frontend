<template>
  <div class="mt-5 text-center">
      <h1>All Users</h1>
  </div>

   <div class="mt-5">
     <router-link to="/admin/all-users/create" class="btn btn-primary">Create A Users</router-link>
  </div>

  <div class="mt-5">
    <table class="table table-bordered border-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Email</th>
          <th>Full Name</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(users, index) in allUsers" :key="index++">
          <td>{{ index }}</td>
          <td>{{ users.username }}</td>
          <td>{{ users.email }}</td>
          <td>{{ users.first_name }} {{ users.last_name }}</td>
          <td>{{ users.roles }}</td>
          <td>
            <a @click.prevent="handleUserDetail(users._id)" class="btn btn-primary me-3">Detail</a>
            <a @click.prevent="handleDeleteUser(users._id)" class="btn btn-danger">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axiosApiIntances from '../../../utils/axios'
export default {
    name: "AllUsers",
    data() {
      return {
        allUsers: []
      }
    },
    methods: {
      handleGetAllUsers() {
        axiosApiIntances.get('users')
        .then((res) => {
          this.allUsers = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
      },
      handleUserDetail(id) {
        this.$router.push({ name: 'UserDetail', params: { id } })
      },
      handleDeleteUser(id) {
        console.log(id)
      }
    },
    created() {
      this.handleGetAllUsers()
    }
}
</script>

<style>

</style>
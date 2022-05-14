<template>
  <div class="mt-5 text-center">
      <h1>User Information</h1>
  </div>

  <div class="mt-5 text-center">
    <a @click.prevent="handleAllUsers" class="btn btn-secondary">Back</a>
  </div>

  <div class="row mt-5 text-center">
    <div class="col">
      <b>Username</b>
      <p>{{ userDetail.username }}</p>
      <b>Email</b>
      <p>{{ userDetail.email }}</p>
    </div>
    <div class="col">
      <b>Full Name</b>
      <p>{{ userDetail.first_name }} {{ userDetail.last_name }}</p>
      <b>Role</b>
      <p>{{ userDetail.roles }}</p>
    </div>
  </div>
</template>

<script>
import axiosApiIntances from '../../../utils/axios'
export default {
    name: 'UserDetail',
    data() {
      return {
        userDetail: ''
      }
    },
    methods: {
      handleGetUserDetail(){
        const id = this.$route.params.id
        axiosApiIntances.get(`users/${id}`)
        .then((res)=>{
          this.userDetail = res.data.data
        })
        .catch((err)=>{
          console.log(err)
        })
      },
      handleAllUsers() {
        this.$router.push({ name: 'AllUsers' })
      }
    },
    created() {
      this.handleGetUserDetail()
    }
}
</script>

<style>

</style>
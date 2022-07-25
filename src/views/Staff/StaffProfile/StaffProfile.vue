<template>
  <div class="mt-5 text-center">
    <h1>Staff's Profile Information</h1>
  </div>

  <div class="mt-5 mx-auto">
    <a @click.prevent="handleEditStaffProfile" class="btn btn-primary edit_button_link">Edit Profile</a>
  </div>

  <div class="row mt-5">
    <div class="col">
      <b>First Name</b>
        <p>{{ userStaffProfile.first_name }}</p>
      <b>Last Name</b>
        <p>{{ userStaffProfile.last_name }}</p>
    </div>
    <div class="col">
      <b>Address</b>
        <p>{{ userStaffProfile.address }}</p>
      <b>Phone Number</b>
        <p>{{ userStaffProfile.phone_number }}</p>
    </div>
  </div>
  
</template>

<script>
import axiosApiIntances from '../../../utils/axios'
export default {
    name: "StaffProfile",
    data() {
      return {
        userStaffProfile: []
      }
    },
    methods: {
      handleGetStaffProfile() {
        const id = this.$route.params.id
        axiosApiIntances.get(`users/${id}`)
        .then((res)=>{
          this.userStaffProfile = res.data.data
        })
        .catch((err)=>{
          console.log(err)
        })
      },
      handleEditStaffProfile() {
        const id = this.$route.params.id
        this.$router.push({ name: 'EditStaffProfile', params: { id } })
      }
    },
    created() {
      this.handleGetStaffProfile()
    }

}
</script>

<style>

</style>
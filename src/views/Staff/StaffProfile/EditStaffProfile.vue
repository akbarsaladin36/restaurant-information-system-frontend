<template>
  <div class="mt-5 text-center">
    <h1>Edit Staff's Profile</h1>
  </div>

  <form @submit.prevent="handleUpdateStaffProfile" method="post">
        <div class="mt-5 text-center">
            <button type='submit' class="btn btn-primary">Update Profile</button>
        </div>
        <div class="row mt-5 h-50 w-50 mx-auto">
            <div class="col">
                <div class="form-group">
                    <label for="first_name">First Name</label>
                    <input type="text" name="first_name" id="first_name" class="form-control" v-model="updateStaffProfile.first_name">
                </div>
                <div class="form-group mt-3">
                    <label for="last_name">Last Name</label>
                    <input type="text" name="last_name" id="last_name" class="form-control" v-model="updateStaffProfile.last_name">
                </div>

            </div>
            <div class="col">
                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" name="address" id="address" class="form-control" v-model="updateStaffProfile.address">
                </div>
                <div class="form-group mt-3">
                    <label for="phone_number">Phone Number</label>
                    <input type="text" name="phone_number" id="phone_number" class="form-control" v-model="updateStaffProfile.phone_number">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">

            </div>
            <div class="col">

            </div>
        </div>
    </form>
  
</template>

<script>
import axiosApiIntances from '../../../utils/axios'
import Swal from 'sweetalert2'
export default {
    name: "EditStaffProfile",
    data() {
      return {
        updateStaffProfile: {
          first_name: "",
          last_name: "",
          address: "",
          phone_number: ""
        }
      }
    },
    methods: {
      handleGetStaffProfile() {
        const id = this.$route.params.id
        axiosApiIntances.get(`users/${id}`)
        .then((res)=>{
          this.updateStaffProfile.first_name = res.data.data.first_name
          this.updateStaffProfile.last_name = res.data.data.last_name
          this.updateStaffProfile.address = res.data.data.address
          this.updateStaffProfile.phone_number = res.data.data.phone_number
        })
        .catch((err)=>{
          console.log(err)
        })
      },
      handleUpdateStaffProfile(){
        const id = this.$route.params.id
        console.log(id)
        const formData = new FormData()
        formData.append('userFirstName', this.updateStaffProfile.first_name)
        formData.append('userLastName', this.updateStaffProfile.last_name)
        formData.append('userAddress', this.updateStaffProfile.address)
        formData.append('userPhoneNumber', this.updateStaffProfile.phone_number)
        axiosApiIntances.patch(`users/${id}`, formData)
        .then((res)=>{
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: res.data.msg
          })
          this.$router.push({ name: 'StaffProfile', params: { id } })
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    },
    created() {
      this.handleGetStaffProfile()
    }
}
</script>

<style>

</style>
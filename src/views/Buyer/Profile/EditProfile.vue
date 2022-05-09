<template>
  <div class="mt-5">
      <h1>Edit Profile</h1>
  </div>
    <form @submit.prevent="handleUpdateUserProfile" method="post">
        <div class="mt-5 mx-auto">
            <button type='submit' class="btn btn-primary">Update Profile</button>
        </div>
        <div class="row mt-5 h-50 w-50 mx-auto">
            <div class="col">
                <div class="form-group">
                    <label for="first_name">First Name</label>
                    <input type="text" name="first_name" id="first_name" class="form-control" v-model="updateUserProfile.first_name">
                </div>
                <div class="form-group mt-3">
                    <label for="last_name">Last Name</label>
                    <input type="text" name="last_name" id="last_name" class="form-control" v-model="updateUserProfile.last_name">
                </div>

            </div>
            <div class="col">
                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" name="address" id="address" class="form-control" v-model="updateUserProfile.address">
                </div>
                <div class="form-group mt-3">
                    <label for="phone_number">Phone Number</label>
                    <input type="text" name="phone_number" id="phone_number" class="form-control" v-model="updateUserProfile.phone_number">
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
import Swal from "sweetalert2"
import axiosApiIntances from "../../../utils/axios"
export default {
    name: "EditProfile",
    data() {
        return {
            updateUserProfile: {
                first_name: '',
                last_name: '',
                address: '',
                phone_number: '',
                avatar_image: null
            },
            isSuccess: false,
            isError: false
        }
    },
    methods: {
        getProfileUser() {
            const id = this.$route.params.id
            axiosApiIntances.get(`users/${id}`)
            .then((res) => {
                console.log(res)
                this.updateUserProfile.first_name = res.data.data.first_name
                this.updateUserProfile.last_name = res.data.data.last_name
                this.updateUserProfile.address = res.data.data.address
                this.updateUserProfile.phone_number = res.data.data.phone_number
            })
            .catch((err) => {
                console.log(err)
            })
        },
        handleUpdateUserProfile() {
            const id = this.$route.params.id
            const formData = new FormData()
            formData.append('userFirstName', this.updateUserProfile.first_name)
            formData.append('userLastName', this.updateUserProfile.last_name)
            formData.append('userAddress', this.updateUserProfile.address)
            formData.append('userPhoneNumber', this.updateUserProfile.phone_number)
            axiosApiIntances.patch(`users/${id}`, formData)
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: res.data.msg
                })
                this.$router.push({ name: 'Profile', params: { id } })
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },
    created() {
        this.getProfileUser()
    }
}
</script>

<style>

</style>
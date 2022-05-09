<template>
  <div class="mt-5">
      <h1>Profile Information</h1>
  </div>

    <div class="mt-5 mx-auto">
        <a @click.prevent="handleEditProfile" class="btn btn-primary edit_button_link">Edit Profile</a>
    </div>

    <div class="row mt-5">
        <div class="col">
            <b>First Name</b>
            <p>{{ userProfile.first_name }}</p>
            <b>Last Name</b>
            <p>{{ userProfile.last_name }}</p>
        </div>
        <div class="col">
            <b>Address</b>
            <p>{{ userProfile.address }}</p>
            <b>Phone Number</b>
            <p>{{ userProfile.phone_number }}</p>
        </div>
    </div>
</template>

<script>
import axiosApiIntances from "../../../utils/axios"
export default {
    name: "Profile",
    data() {
        return {
            userProfile: ''
        }
    },
    methods: {
        getProfileUser() {
            const id = this.$route.params.id
            axiosApiIntances.get(`users/${id}`)
            .then((res) => {
                console.log(res)
                this.userProfile = res.data.data
            })
            .catch((err) => {
                console.log(err)
            })
        },
        handleEditProfile() {
            const id = this.$route.params.id
            this.$router.push({ name: 'EditProfile', params: { id } })
        }
    },
    created() {
        this.getProfileUser()
    }
}
</script>

<style>
    .edit_button_link {
        cursor: pointer;
    }
</style>
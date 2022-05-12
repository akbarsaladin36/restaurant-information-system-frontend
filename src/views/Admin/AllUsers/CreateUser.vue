<template>
  <div class="mt-5 text-center">
      <h1>Create A User</h1>
  </div>

  <div class="mt-5">
    <form @submit.prevent="handleCreateUser" method="post">
      <div class="form-group mt-3">
        <label for="username">Username</label>
        <input type="text" name="username" id="username" class="form-control" v-model="formUser.username">
      </div>
      <div class="form-group mt-3">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" class="form-control" v-model="formUser.email">
      </div>
      <div class="form-group mt-3">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="form-control" v-model="formUser.password">
      </div>
      <div class="form-group mt-3">
        <label for="role">Role</label>
        <input type="text" name="role" id="role" class="form-control" v-model="formUser.role">
      </div>
      <button type="submit" class="btn btn-primary mt-4 form-control">Create</button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axiosApiIntances from '../../../utils/axios'
export default {
    name: 'CreateUser',
    data() {
        return {
            formUser: {
                username: '',
                email: '',
                password: '',
                role: ''
            }
        }
    },
    methods: {
        handleCreateUser() {
            const data = {
                userName: this.formUser.username,
                userEmail: this.formUser.email,
                userPassword: this.formUser.password,
                userRoles: this.formUser.role
            }
            axiosApiIntances.post('users', data)
            .then((res) => {
                console.log(res)
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: res.data.msg
                })
                this.$router.push({ path: '/admin/all-users' })
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>

<style>

</style>
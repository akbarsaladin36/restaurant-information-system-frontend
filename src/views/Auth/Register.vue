<template>
  <div class="mt-5">
      <h1>Register</h1>
  </div>
  <div class="h-25 w-25 mx-auto mt-5">
      <form @submit.prevent="handleRegister" method="post">
          <div class="form-group mt-3">
              <label for="username">Username</label>
              <input type="text" name="username" id="username" class="form-control" v-model="registerForm.username" autocomplete="off">
          </div>
          <div class="form-group mt-3">
              <label for="email">E-mail</label>
              <input type="email" name="email" id="email" class="form-control" v-model="registerForm.email" autocomplete="off">
          </div>
          <div class="form-group mt-3">
              <label for="password">Password</label>
              <input type="password" name="password" id="password" class="form-control" v-model="registerForm.password">
          </div>
          <button type="submit" class="btn btn-primary mt-4 form-control">Register</button>
      </form>
  </div>
</template>

<script>
import Swal from "sweetalert2"
import axiosApiIntances from "../../utils/axios"
export default {
    name: 'Register',
    data() {
        return {
            registerForm: {
                username: '',
                email: '',
                password: ''
            },
            isSuccess: false,
            isError: false
        }
    },
    methods: {
        handleRegister() {
            const data = {
                userName: this.registerForm.username,
                userEmail: this.registerForm.email,
                userPassword: this.registerForm.password
            }
            axiosApiIntances.post('auth/register', data)
            .then((res) => {
                console.log(res)
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: res.data.msg
                })
                this.$router.push({ path: '/auth/login' })
            })
            .catch((err) => {
                console.log(err)
                this.registerForm.username = ''
                this.registerForm.email = ''
                this.registerForm.password = ''
            })
        }
    }
}
</script>

<style>

</style>
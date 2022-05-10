<template>
  <div class="mt-5 text-center">
      <h1>Login</h1>
  </div>
  <div class="h-25 w-25 mx-auto mt-5">
      <form @submit.prevent="handleLogin" method="post">
          <div class="form-group mt-3">
              <label for="email">E-mail</label>
              <input type="email" name="email" id="email" class="form-control" v-model="loginForm.email" autocomplete="off">
          </div>
          <div class="form-group mt-3">
              <label for="password">Password</label>
              <input type="password" name="password" id="password" class="form-control" v-model="loginForm.password">
          </div>
          <button type="submit" class="btn btn-primary mt-4 form-control">Login</button>
      </form>
  </div>
</template>

<script>
import Swal from "sweetalert2"
import axiosApiIntances from "../../utils/axios"
export default {
    name: "Login",
    data() {
        return {
            loginForm: {
                email: '',
                password: ''
            },
            isSuccess: false,
            isError: false
        }
    },
    methods: {
        handleLogin() {
            const data = {
                userEmail: this.loginForm.email,
                userPassword: this.loginForm.password
            }
            axiosApiIntances.post('auth/login', data)
            .then((res) => {
                console.log(res)
                localStorage.setItem('token', res.data.data.token)
                localStorage.setItem('roles', res.data.data.roles)
                localStorage.setItem('user', res.data.data._id)
                if(res.data.data.roles === 'admin') {
                    console.log('Ini adalah admin')
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: res.data.msg
                    })
                    this.$router.push({ path: '/admin/dashboard' })
                } else if (res.data.data.roles === 'staff') {
                    console.log('Ini adalah staff')
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: res.data.msg
                    })
                    this.$router.push({ path: '/buyer/home' })
                }
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
<template>
  <div class="mt-5">
    <div class="text-center">
        <h1>Create A Message</h1>
    </div>
  </div>

  <form @submit.prevent="handleCreateMessage" method="post">
    <div class="form-group">
        <label for="receiver_id">To</label>
        <select name="receiver_id" v-model="formMessage.receiverId" id="receiver_id" class="form-select" value="Pilih User">
            <option v-for="(item, index) in allUser" :key="index" :value="item._id"> 
               {{item.username}}
            </option>
        </select>
        <!-- <input type="text" name="receiver_id" id="receiver_id" class="form-control"> -->
    </div>
    <div class="form-group mt-3">
        <label for="message_title">Title</label>
        <input type="text" name="message_title" v-model="formMessage.messageTitle" id="message_title" class="form-control">
    </div>
    <div class="form-group mt-3">
        <label for="message_desc">Description</label>
        <textarea name="message_desc" id="message_desc" v-model="formMessage.messageDesc" class="form-control" rows="10"></textarea>
    </div>
    <button type="submit" class="form-control btn btn-success mt-3">Send</button>
  </form>

</template>

<script>
import Swal from 'sweetalert2'
import axiosApiIntances from '../../../utils/axios'
export default {
    name: "BuyerCreateMessage",
    data() {
      return {
        allUser: [],
        formMessage: {
          receiverId: "",
          messageTitle: "",
          messageDesc: ""
        }
      }
    },
    methods: {
      handleGetAllUsersByAdminStaff() {
        axiosApiIntances.get('users/all-workers')
        .then((res)=>{
          this.allUser = res.data.data
        })
        .catch((err)=>{
          console.log(err)
        })
      },
      handleCreateMessage() {
        const data = {
          receiverId: this.formMessage.receiverId,
          messageTitle: this.formMessage.messageTitle,
          messageDesc: this.formMessage.messageDesc
        }
        axiosApiIntances.post('messages', data)
        .then((res)=>{
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: res.data.msg
          })
          this.$router.push('/buyer/all-messages')
        })
        .catch((err)=> {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: err.response.data.msg
          })
        })
      }
    },
    created() {
      this.handleGetAllUsersByAdminStaff()
    }
}
</script>

<style>

</style>
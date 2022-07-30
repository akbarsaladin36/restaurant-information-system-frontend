<template>
  <div class="mt-5 text-center">
      <h1>All Messages</h1>
  </div>

      <router-link to="/buyer/all-messages/create" class="btn btn-primary mt-5">New Message</router-link>

    <div class="mt-5">
    <table class="table table-bordered border-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Message Title</th>
          <th>Sent To</th>
          <th>Message Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(message,index) in allStaffMessages" :key="index++">
          <td>{{ index }}</td>
          <td>{{ message.message_title }}</td>
          <td>{{ message.receiver_id }}</td>
          <td>
            <div v-if="message.message_status === 'received' ">
              <a href="#" class="btn btn-success">Reply</a>
            </div>
            <div v-else>
              {{ message.message_status }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axiosApiIntances from '../../../utils/axios'
export default {
    name: 'AllStaffMessages',
    data() {
      return {
        allStaffMessages: []
      }
    },
    methods: {
      handleGetAllStaffMessages() {
        axiosApiIntances.get('messages')
        .then((res)=>{
          this.allStaffMessages = res.data.data
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    },
    created() {
      this.handleGetAllStaffMessages()
    }
}
</script>

<style>

</style>
<template>
  <div class="mt-5 text-center">
      <h1>All Orders</h1>
  </div>

  <div class="mt-5">
    <table class="table table-bordered border-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Order Description</th>
          <th>Order Quantity</th>
          <th>Order Amount</th>
          <th>Order Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(staffOrder, index) in allOrders" :key="index++">
          <td>{{ index }}</td>
          <td>{{ staffOrder.order_desc }}</td>
          <td>{{ staffOrder.order_qty }}</td>
          <td>{{ staffOrder.order_amount }}</td>
          <td>
            <div v-if="staffOrder.order_status === 'pending'">
              <a @click.prevent="handleVerifyOrderTaken(staffOrder._id)" class="btn btn-primary">Verify</a>
            </div>
            <div v-else-if="staffOrder.order_status === 'taken'">
              <a @click.prevent="handleVerifyOrderDelivered(staffOrder._id)" class="btn btn-success">Completed</a>
            </div>
            <div v-else>
              {{ staffOrder.order_status }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axiosApiIntances from '../../../utils/axios'
export default {
    name: 'AllOrders',
    data() {
      return {
        allOrders: []
      }
    },
    methods: {
      handleGetAllOrder() {
        axiosApiIntances.get('orders')
        .then((res) => {
          this.allOrders = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
      },
      handleVerifyOrderTaken(id) {
        axiosApiIntances.patch(`orders/${id}/taken`)
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: res.data.msg
          })
          this.$router.push({ path: '/staff/all-orders' })
          this.handleGetAllOrder()
        })
        .catch((err) => {
          console.log(err)
        })
      },
      handleVerifyOrderDelivered(id) {
        axiosApiIntances.patch(`orders/${id}/delivered`)
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: res.data.msg
          })
          this.$router.push({ path: '/staff/all-orders' })
          this.handleGetAllOrder()
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    created() {
      this.handleGetAllOrder()
    }
}
</script>

<style>

</style>
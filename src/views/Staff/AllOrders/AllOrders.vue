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
            {{ staffOrder.order_status }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
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
          console.log(res)
          this.allOrders = res.data.data
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
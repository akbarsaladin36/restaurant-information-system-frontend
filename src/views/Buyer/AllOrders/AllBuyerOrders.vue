<template>
  <div class="mt-5 text-center">
      <h1>All Buyer Orders</h1>
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
        <tr v-for="(buyerOrder, index) in allBuyerOrder" :key="index++">
          <td>{{ index }}</td>
          <td>{{ buyerOrder.order_desc }}</td>
          <td>{{ buyerOrder.order_qty }}</td>
          <td>{{ buyerOrder.order_amount }}</td>
          <td>
            {{ buyerOrder.order_status }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axiosApiIntances from '../../../utils/axios'
export default {
    name: 'AllBuyerOrders',
    data() {
      return {
        allBuyerOrder: []
      }
    },
    methods: {
      handleGetAllBuyerOrders() {
        axiosApiIntances.get('orders/all-order/current-buyer')
        .then((res) => {
          console.log(res)
          this.allBuyerOrder = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    created() {
      this.handleGetAllBuyerOrders()
    }
}
</script>

<style>

</style>
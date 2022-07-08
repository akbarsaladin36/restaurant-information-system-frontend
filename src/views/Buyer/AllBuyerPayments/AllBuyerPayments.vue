<template>
   <div class="mt-5 text-center">
      <h1>All Buyer Payments</h1>
  </div>

  <router-link to="/buyer/all-payments/create" class="btn btn-primary mt-5">New Payments</router-link>

  <div class="mt-5">
    <table class="table table-bordered border-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Payment Amount</th>
          <th>Payment Type</th>
          <th>Payment Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(payment, index) in allPayments" :key="index++">
          <td>{{ index }}</td>
          <td>{{ payment.product_detail[0].product_name }}</td>
          <td>{{ payment.payment_amount }}</td>
          <td>{{ payment.payment_type }}</td>
          <td>
            {{ payment.payment_status }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axiosApiIntances from "../../../utils/axios"
export default {
    name: 'AllBuyerPayments',
    data() {
      return {
        allPayments: []
      }
    },
    methods: {
      handleGetAllPayments() {
        axiosApiIntances.get('payments/my-payments')
        .then((res)=>{
          console.log(res)
          this.allPayments = res.data.data
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    },
    created() {
      this.handleGetAllPayments()
    }
}
</script>

<style>

</style>
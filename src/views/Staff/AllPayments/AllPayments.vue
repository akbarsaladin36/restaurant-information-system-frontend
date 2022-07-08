<template>
  <div class="mt-5 text-center">
      <h1>All Payments</h1>
  </div>

  <div class="mt-5">
    <table class="table table-bordered border-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Customer</th>
          <th>Payment Amount</th>
          <th>Payment Type</th>
          <th>Payment Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(payment, index) in allPayments" :key="index++">
          <td>{{ index }}</td>
          <td>{{ payment.product_detail[0].product_name }}</td>
          <td>{{ payment.user_detail[0].username }}</td>
          <td>{{ payment.payment_amount }}</td>
          <td>{{ payment.payment_type }}</td>
          <td>
            <div v-if="payment.payment_status === 'pending'">
              <a @click.prevent="handleVerifyPayment(payment._id)" class="btn btn-success">Verify</a>
            </div>
            <div v-else>
              {{ payment.payment_status }}
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
    name: 'AllPayments',
    data() {
      return {
        allPayments: [],
        allProducts: []
      }
    },
    methods: {
      getAllPayments() {
          axiosApiIntances.get('payments')
          .then((res)=>{
            this.allPayments = res.data.data
          })
          .catch((err)=>{
            console.log(err)
          })
        },
      handleVerifyPayment(id) {
          axiosApiIntances.patch(`payments/verify-payment/${id}`)
          .then((res)=>{
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: res.data.msg
            })
            this.$router.push({ path: '/staff/all-payments' })
            this.getAllPayments()
          })
          .catch((err)=>{
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
      this.getAllPayments()
    }
}
</script>

<style>

</style>
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
          <th>Payment Amount</th>
          <th>Payment Type</th>
          <th>Payment Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Test123</td>
          <td>Test123</td>
          <td>Test123</td>
          <td>
            Test123
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import axiosApiIntances from '../../../utils/axios'
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
        console.log('coming soon untuk tampilan payments')
      }
    },
    created() {
      this.getAllPayments()
    }
}
</script>

<style>

</style>
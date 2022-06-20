<template>
   <div class="mt-5 text-center">
      <h1>All Payments</h1>
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
export default {
    name: 'AllBuyerPayments'
}
</script>

<style>

</style>
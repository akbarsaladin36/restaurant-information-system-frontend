<template>
  <div class="mt-5 text-cent">
    <h1>Create A Payment</h1>
  </div>

  <div class="mt-5">
    <form method="post">
      <div class="form-group mt-3">
        <label for="product_id">Product ID</label>
        <input type="text" name="product_id" id="product_id" class="form-control">
      </div>
      <div class="form-group mt-3">
        <label for="payment_amount">Payment Amount</label>
        <input type="text" name="payment_amount" id="payment_amount" class="form-control">
      </div>
      <div class="form-group mt-3">
        <label for="payment_type">Payment Type</label>
        <input type="text" name="payment_type" id="payment_type" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary mt-4 form-control">Create</button>
    </form>
  </div>
</template>

<script>
export default {
    name: "BuyerCreatePayment"
}
</script>

<style>

</style>
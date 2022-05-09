<template>
  <div class="mt-5">
      <h1>All Products</h1>
  </div>

  <div class="mt-5">
     <router-link to="/admin/all-products/create" class="btn btn-primary">Create A Product</router-link>
  </div>

  <div class="mt-5">
    <table class="table table-bordered border-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Product Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
            <a class="btn btn-danger">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: "AllProducts"
}
</script>

<style>

</style>
<template>
  <div class="mt-5 text-center">
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
        <tr v-for="(product, index) in allProduct" :key="index++">
          <td>{{ index }}</td>
          <td>{{ product.product_name }}</td>
          <td>{{ product.product_price }}</td>
          <td>{{ product.product_qty }}</td>
          <td>
            <a @click.prevent="handleDetailProduct(product._id)"  class="btn btn-primary me-3">Detail</a>
            <a @click.prevent="handleDeleteProduct(product._id)" class="btn btn-danger">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import axiosApiIntances from '../../../utils/axios'
export default {
    name: "AllProducts",
    data() {
      return {
        allProduct: []
      }
    },
    methods: {
      handleGetAllProducts() {
        axiosApiIntances.get('products')
        .then((res)=>{
          this.allProduct = res.data.data;
        })
        .catch((err)=>{
          console.log(err)
        })
      },
      handleDeleteProduct(id) {
        console.log(id)
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Delete OK!'
        })
      },
      handleDetailProduct(id) {
        this.$router.push({ name: "ProductDetail", params: { id } })
      }
    },
    created() {
      this.handleGetAllProducts()
    }
}
</script>

<style>

</style>
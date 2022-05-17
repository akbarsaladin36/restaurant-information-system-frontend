<template>
  <div class="mt-5 text-center">
      <h1>Home</h1>
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
            <a @click.prevent="handleProductDetail(product._id)" class="btn btn-primary me-3">Detail</a>
            <a @click.prevent="handleOrderNow(product._id)"  class="btn btn-success">Order Now</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axiosApiIntances from '../../../utils/axios'
export default {
    name: 'Home',
    data() {
      return {
        allProduct: []
      }
    },
    methods: {
      handleGetAllProduct() {
        axiosApiIntances.get('products')
        .then((res) => {
          this.allProduct = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
      },
      handleProductDetail(id) {
        this.$router.push({ name: 'BuyerProductDetail', params: { id } })
      },
      handleOrderNow(id) {
        this.$router.push({ name: 'BuyerOrderDetail', params: { id } })
      }
    },
    created() {
      this.handleGetAllProduct()
    }
}
</script>

<style>

</style>
<template>
  <div class="mt-5 text-center">
      <h1>Create A Product</h1>
  </div>

  <div class="mt-5">
    <form @submit.prevent="handleCreateProduct" method="post">
      <div class="form-group mt-3">
        <label for="product_name">Product Name</label>
        <input type="text" name="product_name" id="product_name" class="form-control" v-model="formProduct.productName">
      </div>
      <div class="form-group mt-3">
        <label for="product_desc">Product Description</label>
        <input type="text" name="product_desc" id="product_desc" class="form-control" v-model="formProduct.productDesc">
      </div>
      <div class="form-group mt-3">
        <label for="product_price">Product Price</label>
        <input type="text" name="product_price" id="product_price" class="form-control" v-model="formProduct.productPrice">
      </div>
      <div class="form-group mt-3">
        <label for="product_qty">Product Quantity</label>
        <input type="text" name="product_qty" id="product_qty" class="form-control" v-model="formProduct.productQty">
      </div>
      <button type="submit" class="btn btn-primary mt-4 form-control">Create</button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axiosApiIntances from '../../../utils/axios'
export default {
    name: "CreateProduct",
    data() {
      return {
        formProduct: {
          productName: '',
          productDesc: '',
          productPrice: 0,
          productQty: 0
        },
      }
    },
    methods: {
      handleCreateProduct() {
        const data = {
          productName: this.formProduct.productName,
          productDesc: this.formProduct.productDesc,
          productPrice: this.formProduct.productPrice,
          productQty: this.formProduct.productQty
        }
        axiosApiIntances.post('products', data)
        .then((res)=>{
          console.log(res)
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: res.data.msg
          })
          this.$router.push({ path: '/admin/all-products' })
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
    }
}
</script>

<style>

</style>
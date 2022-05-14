<template>
  <div class="mt-5 text-center">
      <h1>Product Information</h1>
  </div>

  <div class="mt-5 text-center">
    <a @click.prevent="handleEditProduct" class="btn btn-primary">Edit Product</a>
  </div>

  <div class="row mt-5 text-center">
    <div class="col">
      <b>Product Name</b>
      <p>{{ productDetail.product_name }}</p>
      <b>Product Price</b>
      <p>{{ productDetail.product_price }}</p>
    </div>
    <div class="col">
      <b>Product Description</b>
      <p>{{ productDetail.product_desc }}</p>
      <b>Product Quantity</b>
      <p>{{ productDetail.product_qty }}</p>
    </div>
  </div>
</template>

<script>
import axiosApiIntances from '../../../utils/axios'
export default {
    name: "ProductDetail",
    data() {
      return {
        productDetail: ''
      }
    },
    methods: {
      handleProductDetail() {
        const id = this.$route.params.id
        axiosApiIntances.get(`products/${id}`)
        .then((res) => {
          this.productDetail = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
      },
      handleEditProduct() {
        const id = this.$route.params.id
        this.$router.push({ name: 'EditProduct', params: { id } })
      }
    },
    created() {
      this.handleProductDetail()
    }
}
</script>

<style>

</style>
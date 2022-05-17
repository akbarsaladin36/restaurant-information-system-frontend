<template>
  <div class="mt-5 text-center">
      <h1>Product Detail</h1>
  </div>

  <div class="mt-5 text-center">
    <a @click.prevent="handleOrderNow" class="btn btn-success">Order Now</a>
  </div>

  <div class="row mt-5 text-center">
    <div class="col">
      <b>Product Name</b>
      <p>{{ buyerProductDetail.product_name }}</p>
      <b>Product Price</b>
      <p>{{ buyerProductDetail.product_price }}</p>
    </div>
    <div class="col">
      <b>Product Description</b>
      <p>{{ buyerProductDetail.product_desc }}</p>
      <b>Product Quantity</b>
      <p>{{ buyerProductDetail.product_qty }}</p>
    </div>
  </div>
</template>

<script>
import axiosApiIntances from '../../../utils/axios'
export default {
    name: 'BuyerProductDetail',
    data() {
        return {
            buyerProductDetail: ''
        }
    },
    methods: {
        handleGetProductDetail() {
            const id = this.$route.params.id
            axiosApiIntances.get(`products/${id}`)
            .then((res) => {
                this.buyerProductDetail = res.data.data
            })
            .catch((err) => {
                console.log(err)
            })
        },
        handleOrderNow() {
            const id = this.$route.params.id
            this.$router.push({ name: 'BuyerOrderDetail', params: { id } })
        }
    },
    created() {
        this.handleGetProductDetail()
    }
}
</script>

<style>

</style>
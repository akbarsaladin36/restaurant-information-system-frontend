<template>
  <div class="mt-5 text-center">
      <h1>Edit Product</h1>
  </div>

  <div class="mt-5">
    <form @submit.prevent="handleUpdateProduct" method="post">
      <div class="form-group mt-3">
        <label for="product_name">Product Name</label>
        <input type="text" name="product_name" id="product_name" class="form-control" v-model="productDetail.productName">
      </div>
      <div class="form-group mt-3">
        <label for="product_desc">Product Description</label>
        <input type="text" name="product_desc" id="product_desc" class="form-control" v-model="productDetail.productDesc">
      </div>
      <div class="form-group mt-3">
        <label for="product_price">Product Price</label>
        <input type="text" name="product_price" id="product_price" class="form-control" v-model="productDetail.productPrice">
      </div>
      <div class="form-group mt-3">
        <label for="product_qty">Product Quantity</label>
        <input type="text" name="product_qty" id="product_qty" class="form-control" v-model="productDetail.productQty">
      </div>
      <button type="submit" class="btn btn-success mt-4 form-control">Update</button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axiosApiIntances from '../../../utils/axios';
export default {
    name: "EditProduct",
    data() {
        return { 
            productDetail: {
                productName: '',
                productDesc: '',
                productPrice: 0,
                productQty: 0
            }
        }
    },
    methods: {
        handleProductDetail() {
        const id = this.$route.params.id
        axiosApiIntances.get(`products/${id}`)
        .then((res) => {
          console.log(res)
          this.productDetail.productName = res.data.data.product_name
          this.productDetail.productDesc = res.data.data.product_desc
          this.productDetail.productPrice = res.data.data.product_price
          this.productDetail.productQty = res.data.data.product_qty
        })
        .catch((err) => {
          console.log(err)
        })
      },
        handleUpdateProduct() {
        const id = this.$route.params.id
        const data = {
            productName: this.productDetail.productName,
            productDesc: this.productDetail.productDesc,
            productPrice: this.productDetail.productPrice,
            productQty: this.productDetail.productQty
        }
        axiosApiIntances.patch(`products/${id}`, data)
        .then((res) => {
            Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: res.data.msg
            })
            this.$router.push({ name: 'ProductDetail', params: { id } })
        })
        .catch((err) => {
            console.log(err)
        })
        }
    },
    created() {
        this.handleProductDetail()
    }
}
</script>

<style>

</style>
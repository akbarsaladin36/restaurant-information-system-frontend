<template>
  <div class="mt-5 text-center">
      <h1>Order Information</h1>
      <span>for Product ID-{{ productDetail._id }}</span>
  </div>

  <div class="mt-5">
    <form @submit.prevent="handleCreateOrder" method="post">
      <div class="form-group mt-3">
        <label for="order_desc">Order Description</label>
        <input type="text" name="order_desc" id="order_desc" class="form-control" v-model="formOrder.orderDesc">
      </div>
      <div class="form-group mt-3">
        <label for="order_qty">Order Quantity</label>
        <input type="text" name="order_qty" id="order_qty" class="form-control" v-model="formOrder.orderQty">
      </div>
      <button type="submit" class="btn btn-primary mt-4 form-control">Create Order</button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axiosApiIntances from '../../../utils/axios'
export default {
    name: 'BuyerOrderDetail',
    data() {
      return {
        productDetail: '',
        formOrder: {
          orderDesc: '',
          orderQty: ''
        }
      }
    },
    methods: {
      handleCreateOrder() {
        const id = this.$route.params.id
        const data = {
          orderDesc: this.formOrder.orderDesc,
          orderQty: this.formOrder.orderQty
        }
        axiosApiIntances.post(`orders/create/${id}`, data)
        .then((res) => {
          console.log(res)
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: res.data.msg
          })
          this.$router.push({ path: '/buyer/all-orders' })
        })
        .catch((err) => {
          console.log(err)
        })
      },
      handleGetProductDetail() {
        const id = this.$route.params.id
        axiosApiIntances.get(`products/${id}`)
        .then((res) => {
          this.productDetail = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    created() {
      this.handleGetProductDetail()
    }
}
</script>

<style>

</style>
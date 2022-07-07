<template>
  <div class="mt-5 text-cent">
    <h1>Create A Payment</h1>
  </div>

  <div class="mt-5">
    <form @submit.prevent="handleCreatePayment" method="post">
      <div class="form-group mt-3">
        <label for="product_id">Product ID</label>
        <select name="product_id" v-model="formPayments.productId" id="product_id" class="form-select" value="Pilih Barang">
            <option v-for="(item, index) in allProduct" :key="index" :value="item._id"> 
               {{item.product_name}}
            </option>
        </select>
        <!-- <input type="text" name="product_id" id="product_id" class="form-control"> -->
      </div>
      <div class="form-group mt-3">
        <label for="payment_amount">Payment Description</label>
        <input type="text" name="payment_desc" v-model="formPayments.paymentDesc" id="payment_desc" class="form-control">
      </div>
      <div class="form-group mt-3">
        <label for="payment_amount">Payment Amount</label>
        <input type="text" name="payment_amount" v-model="formPayments.paymentAmount" id="payment_amount" class="form-control">
      </div>
      <div class="form-group mt-3">
        <label for="payment_type">Payment Type</label>
        <input type="text" name="payment_type" v-model="formPayments.paymentType" id="payment_type" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary mt-4 form-control">Create</button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axiosApiIntances from "../../../utils/axios"
export default {
    name: "BuyerCreatePayment",
    data() {
      return {
        allProduct: [],
        formPayments: {
          productId: "",
          paymentDesc: "",
          paymentAmount: "0",
          paymentType: ""
        }
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
      handleCreatePayment() {
        const data = {
          productId: this.formPayments.productId,
          paymentDesc: this.formPayments.paymentDesc,
          paymentAmount: this.formPayments.paymentAmount,
          paymentType: this.formPayments.paymentType
        }
        axiosApiIntances.post('payments/create', data)
        .then((res)=>{
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: res.data.msg
          })
          this.$router.push({ path: '/buyer/all-payments' })
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
    },
    created() {
      this.handleGetAllProducts()
    }
}
</script>

<style>

</style>
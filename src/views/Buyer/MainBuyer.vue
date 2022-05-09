<template>
    <BuyerNavbar />
        <div>
            <router-view></router-view>
        </div>
</template>

<script>
import BuyerNavbar from "../../components/BuyerNavbar.vue"
export default {
    name: 'MainBuyer',
    components: {
        BuyerNavbar
    }
}
</script>

<style>

</style>
<template>
  <Navbar />
    <div>
       <router-view></router-view> 
    </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue"
export default {
    name: "MainAuth",
    components: {
        Navbar
    }
}
</script>

<style>

</style>
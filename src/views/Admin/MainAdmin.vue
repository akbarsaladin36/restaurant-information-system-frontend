<template>
  <AdminNavbar />
    <div class="container">
      <router-view></router-view>
    </div>
</template>

<script>
import AdminNavbar from "../../components/AdminNavbar.vue"
export default {
    name: 'MainAdmin',
    components: {
        AdminNavbar
    }
}
</script>

<style>

</style>
<template>
    <StaffNavbar />
        <div>
            <router-view></router-view>
        </div>
</template>

<script>
import StaffNavbar from '../../components/StaffNavbar.vue'
export default {
    name: 'MainStaff',
    components: {
        StaffNavbar
    }
}
</script>

<style>

</style>
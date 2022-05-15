<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <router-link class="navbar-brand my-auto" to="/staff/all-orders">Staff-Restaurant</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto my-auto">
            <li class="nav-item">
                <router-link to="/staff/all-payments" class="nav-link">All Payments</router-link>
            </li>
        </ul>
        <ul class="navbar-nav ms-auto my-auto">
            <li class="nav-item">
                <a @click.prevent="handleProfile" class="nav-link navbar_link">Profile</a>
            </li>
            <li class="nav-item">
                <a @click.prevent="handleLogout" class="nav-link navbar_link">Logout</a>
            </li>
        </ul>
        </div>
    </div>
 </nav>
</template>

<script>
export default {
    name: 'StaffNavbar',
    methods: {
        handleLogout() {
            localStorage.clear()
            this.$router.push({ path: '/auth/login' })
        },
        handleProfile() {
            const id = localStorage.getItem('user')
            console.log(id)
        }
    }
}
</script>

<style>

</style>
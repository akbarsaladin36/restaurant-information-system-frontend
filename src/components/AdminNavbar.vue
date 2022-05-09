<template>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <router-link class="navbar-brand my-auto" to="/admin/dashboard">Admin-Restaurant</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto my-auto">
            <li class="nav-item">
                <router-link to="/admin/all-products" class="nav-link">All Products</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/admin/all-users" class="nav-link">All Users</router-link>
            </li>
        </ul>
        <ul class="navbar-nav ms-auto my-auto">
            <li class="nav-item">
                <a href="#" class="nav-link navbar_link">Profile</a>
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
    name: 'AdminNavbar',
    methods: {
        handleLogout() {
            localStorage.clear()
            this.$router.push({ path: '/auth/login' })
        },
    }
}
</script>

<style>
    .navbar_link {
        cursor: pointer;
    }
</style>
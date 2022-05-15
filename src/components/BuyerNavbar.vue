<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <router-link class="navbar-brand my-auto" to="/buyer/home">Restaurant-Information-System</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto my-auto">
            <li class="nav-item">
                <a href="#" class="nav-link">All Orders</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">All Payments</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">All Messages</a>
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
    name: 'BuyerNavbar',
    methods: {
        handleLogout() {
            localStorage.clear()
            this.$router.push({ path: '/auth/login' })
        },
        handleProfile() {
            const id = localStorage.getItem('user')
            this.$router.push({ name: "Profile", params: { id } })
        }
    }

}
</script>

<style>
    .navbar_link {
        cursor: pointer;
    }
</style>
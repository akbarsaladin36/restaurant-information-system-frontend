import { createWebHistory, createRouter, routerViewLocationKey } from "vue-router"

import LandingPage from "../views/LandingPage.vue"

import MainAuth from "../views/Auth/MainAuth.vue"
import Login from "../views/Auth/Login.vue"
import Register from "../views/Auth/Register.vue"

import MainAdmin from "../views/Admin/MainAdmin.vue"
import Dashboard from "../views/Admin/Dashboard/Dashboard.vue"
import AllProducts from "../views/Admin/AllProducts/AllProducts.vue"
import CreateProduct from "../views/Admin/AllProducts/CreateProduct.vue"
import ProductDetail from "../views/Admin/AllProducts/ProductDetail.vue"
import EditProduct from "../views/Admin/AllProducts/EditProduct.vue"
import AllUsers from "../views/Admin/AllUsers/AllUsers.vue"
import CreateUser from "../views/Admin/AllUsers/CreateUser.vue"
import UserDetail from "../views/Admin/AllUsers/UserDetail.vue"

import MainBuyer from "../views/Buyer/MainBuyer.vue"
import Home from "../views/Buyer/Home/Home.vue"
import Profile from "../views/Buyer/Profile/Profile.vue"
import EditProfile from "../views/Buyer/Profile/EditProfile.vue"

const routes = [
    {
        path: "/",
        name: "LandingPage",
        component: LandingPage,
        meta: { requireVisitor: true }
    },
    {
        path: "/auth",
        name: "MainAuth",
        component: MainAuth,
        meta: { requireVisitor: true },
        children: 
        [
            {
                path: "login",
                name: "Login",
                component: Login,
                meta: { requireVisitor: true }
            },
            {
                path: "register",
                name: "Register",
                component: Register,
                meta: { requireVisitor: true }
            }

        ]
    },
    {
        path: "/buyer",
        name: "MainBuyer",
        component: MainBuyer,
        redirect: '/buyer/home',
        meta: { requireAuth: true, roles: 'buyer' },
        children:
        [
            {
                path: "home",
                name: "Home",
                component: Home,
                meta: { requireAuth: true, roles: 'buyer' }
            },
            {
                path: "profile/:id",
                name: "Profile",
                component: Profile,
                meta: { requireAuth: true, roles: 'buyer' }
            },
            {
                path: "profile/:id/edit-profile",
                name: "EditProfile",
                component: EditProfile,
                meta: { requireAuth: true, roles: 'buyer' }
            }
        ]
    },
    {
        path: "/admin",
        name: "MainAdmin",
        component: MainAdmin,
        redirect: '/admin/dashboard',
        meta: { requireAuth: true, roles: 'admin' },
        children: 
        [
            {
                path: "dashboard",
                name: "Dashboard",
                component: Dashboard,
                meta: { requireAuth: true, roles: 'admin' }
            },
            {
                path: "all-products",
                name: "AllProducts",
                component: AllProducts,
                meta: { requireAuth: true, roles: 'admin' }
            },
            {
                path: "all-products/create",
                name: "CreateProduct",
                component: CreateProduct,
                meta: { requireAuth: true, roles: 'admin'}
            },
            {
                path: "all-products/product-detail/:id",
                name: "ProductDetail",
                component: ProductDetail,
                meta: { requireAuth: true, roles: 'admin' }
            },
            {
                path: "all-products/product-detail/:id/edit",
                name: "EditProduct",
                component: EditProduct,
                meta: { requireAuth: true, roles: 'admin' }
            },
            {
                path: "all-users",
                name: "AllUsers",
                component: AllUsers,
                meta: { requireAuth: true, roles: 'admin' }
            },
            {
                path: "all-users/create",
                name: 'CreateUser',
                component: CreateUser,
                meta: { requireAuth: true, roles: 'admin' }
            },
            {
                path: 'all-users/user-detail/:id',
                name: 'UserDetail',
                component: UserDetail,
                meta: { requireAuth: true, roles: 'admin' }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requireAuth)) {
        const token = localStorage.getItem('token')
        if(!token) {
            next('/auth/login')
        } else {
            const roles = localStorage.getItem('roles')
            if(to.matched.some(record => record.meta.roles)) {
                if(roles === to.meta.roles) {
                    next()
                } else {
                    localStorage.clear()
                    next('/auth/login')
                }
            } else {
                next()
            }
        }
    } else if(to.matched.some(record => record.meta.requireVisitor)) {
        const token = localStorage.getItem('token')
        const roles = localStorage.getItem('roles')
        if(token && roles === 'admin') {
            next('/admin/dashboard')
        } else if (token && roles === 'buyer') {
            next('/buyer/home')
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
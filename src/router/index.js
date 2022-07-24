import { createWebHistory, createRouter, routerViewLocationKey } from "vue-router"
import Swal from "sweetalert2"

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

import MainStaff from "../views/Staff/MainStaff.vue"
import AllOrders from "../views/Staff/AllOrders/AllOrders.vue"
import AllPayments from "../views/Staff/AllPayments/AllPayments.vue"
import AllStaffMessages from "../views/Staff/AllStaffMessages/AllStaffMessages.vue"
import StaffProfile from "../views/Staff/StaffProfile/StaffProfile.vue"
import EditStaffProfile from "../views/Staff/StaffProfile/EditStaffProfile.vue"

import MainBuyer from "../views/Buyer/MainBuyer.vue"
import Home from "../views/Buyer/Home/Home.vue"
import Profile from "../views/Buyer/Profile/Profile.vue"
import EditProfile from "../views/Buyer/Profile/EditProfile.vue"
import AllBuyerOrders from "../views/Buyer/AllOrders/AllBuyerOrders.vue"
import BuyerOrderDetail from "../views/Buyer/AllOrders/BuyerOrderDetail.vue"
import BuyerProductDetail from "../views/Buyer/BuyerProduct/BuyerProductDetail.vue"
import AllBuyerPayments from "../views/Buyer/AllBuyerPayments/AllBuyerPayments.vue"
import BuyerCreatePayment from "../views/Buyer/AllBuyerPayments/BuyerCreatePayment.vue"
import BuyerAllMessages from "../views/Buyer/AllMessages/BuyerAllMessages.vue"
import BuyerCreateMessage from "../views/Buyer/AllMessages/BuyerCreateMessage.vue";

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
            },
            {
                path: "all-orders",
                name: "AllBuyerOrders",
                component: AllBuyerOrders,
                meta: { requireAuth: true, roles: 'buyer' }
            },
            {
                path: "order-detail/:id",
                name: "BuyerOrderDetail",
                component: BuyerOrderDetail,
                meta: { requireAuth: true, roles: 'buyer' }
            },
            {
                path: "product-detail/:id",
                name: "BuyerProductDetail",
                component: BuyerProductDetail,
                meta: { requireAuth: true, roles: 'buyer' }
            },
            {
                path: "all-payments",
                name: "AllBuyerPayments",
                component: AllBuyerPayments,
                meta: { requireAuth: true, roles: 'buyer' }
            },
            {
                path: "all-payments/create",
                name: "BuyerCreatePayment",
                component: BuyerCreatePayment,
                meta: { requireAuth: true, roles: 'buyer' }
            },
            {
                path: "all-messages",
                name: "BuyerAllMessages",
                component: BuyerAllMessages,
                meta: { requireAuth: true, roles: 'buyer' }
            },
            {
                path: "all-messages/create",
                name: "BuyerCreateMessage",
                component: BuyerCreateMessage,
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
    },
    {
        path: '/staff',
        name: 'MainStaff',
        component: MainStaff,
        meta: { requireAuth: true, roles: 'staff' },
        children:
        [
            {
                path: 'all-orders',
                name: 'AllOrders',
                component: AllOrders,
                meta: { requireAuth: true, roles: 'staff' }
            },
            {
                path: 'all-payments',
                name: 'AllPayments',
                component: AllPayments,
                meta: { requireAuth: true, roles: 'staff' }
            },
            {
                path: 'all-messages',
                name: 'AllStaffMessages',
                component: AllStaffMessages,
                meta: { requireAuth: true, roles: 'staff' }
            },
            {
                path: 'profile/:id',
                name: 'StaffProfile',
                component: StaffProfile,
                meta: { requireAuth: true, roles: 'staff' }
            },
            {
                path: 'profile/:id/edit-profile',
                name: 'EditStaffProfile',
                component: EditStaffProfile,
                meta: { requireAuth: true, roles: 'staff' }
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
                    Swal.fire({
                        icon: 'warning',
                        title: 'Access Restricted!',
                        text: `This page is restricted access! Please logged in if you are staff or admin!`
                    })
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
        } else if(token && roles === 'staff') {
            next('/staff/all-orders')
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
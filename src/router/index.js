import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store/index.js'

const routes = [
    {
        path: '/',
        name: "Home",
        component: () => import('@/views/Home.vue'),
        meta: { requiresAuth: true },
        children: [
            {
                path: '/',
                name: 'User',
                component: () => import('@/views/User.vue') 
            },
            {
                path: '/articles',
                name: 'Articles',
                component: () => import('@/views/Articles.vue')
            },
            {
                path: '/vocab',
                name: 'Vocab',
                component: () => import('@/views/Vocab.vue')
            },
            {
                path: '/category',
                name: 'Category',
                component: () => import('@/views/Category.vue')
            },
            {
                path: '/add',
                name: 'Add',
                component: () => import('@/views/Add.vue')
            },
            {
                path: '/articles/:id',
                name: 'ReadArticle',
                component: () => import('@/views/Read.vue')
            }
        ]
    },
    {
        path: '/login', 
        name: 'Login', 
        component: () => import('@/views/Login.vue'),
        meta: { guest: true },
    },
    {
        path: '/register', 
        name: 'Register', 
        component: () => import('@/views/Register.vue'),
        meta: { guest: true}
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})


router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!store.getters.isAuthenticated) {
            next("/login")
            return
        }
    }
    next()
});
  
router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.guest)) {
        if (store.getters.isAuthenticated) {
            next("/")
            return
        }
    }
    next()
});

export default router



import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: "Home",
        component: () => import('@/views/Home.vue'),
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
    {path: '/login', name: 'Login', component: () => import('@/views/Login.vue')},
    {path: '/register', name: 'Register', component: () => import('@/views/Register.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router



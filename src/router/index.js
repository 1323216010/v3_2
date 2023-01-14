import { createRouter, createWebHistory } from 'vue-router'


const routerHistory = createWebHistory();
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component: () => import('../views/Home.vue')
        },
        {
            path:'/poets',
            component: () => import('../components/Poets.vue')
        },
        {
            path:'/novel',
            component: () => import('../components/Novel.vue')
        },
        {
            path:'/chapter',
            component: () => import('../views/novel/Chapter.vue')
        },
        {
            path:'/chapter/content',
            component: () => import('../views/novel/Content.vue')
        },
    ]
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '@/pages/landing'
import NotFound from '@/pages/error/error404'

import Me from '@/pages/me'

import Login from '@/pages/login'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/not-found',
            name: 'NotFound',
            component: NotFound,
        }
        {
            path: '',
            name: 'Login',
            component: Login
        },
        {
            path: '/me',
            name: 'Me',
            component: Me,
        }
    ]
})

router.beforeEach(async (to, from, next) => {
    if( from == to ) return
    let found = router.options.routes.some(r => {
        return r.name === to.name
    })
    if (!found) {
        next('/not-found')
        return
    }

    next()
})

export default router

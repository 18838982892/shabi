import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/login.vue')
    },
    {
        path: '/login',
        name: 'About',
        component: () =>
            import ('../views/login.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () =>
            import ('../views/Home.vue'),
        children: [{
                path: 'userlist',
                component: () =>
                    import ("../components/userlist.vue")
            },
            {
                path: "addUser",
                component: () =>
                    import ("../components/adduser.vue")
            },
            {
                path: "removeUser",
                component: () =>
                    import ("../components/removeuser.vue")
            },
            {
                path: "rules",
                component: () =>
                    import ("../components/rules.vue")
            }
        ]
    }

]

const router = new VueRouter({
    routes
})

export default router
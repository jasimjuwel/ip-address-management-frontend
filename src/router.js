import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/ip-list',
            name: 'ip-list',
            // lazy-loaded
            component: () => import('./components/IpList.vue'),
            meta: {
                auth: true
            },
        },
        {
            path: '/ip-create',
            name: 'ip-create',
            // lazy-loaded
            component: () => import('./components/IpCreate.vue'),
            meta: {
                auth: true
            },
        },
    ]
});


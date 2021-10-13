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
            component: () => import('./components/IpAdress/IpList.vue'),
            meta: {
                auth: true
            },
        },
        {
            path: '/ip-create',
            name: 'ip-create',
            // lazy-loaded
            component: () => import('./components/IpAdress/IpCreate.vue'),
            meta: {
                auth: true
            },
        },
        {
            path: '/ip-edit/:id',
            name: 'ip-edit',
            // lazy-loaded
            component: () => import('./components/IpAdress/IpEdit.vue'),
            meta: {
                auth: true
            },
        },
        {
            path: '/audit-list',
            name: 'audit-list',
            // lazy-loaded
            component: () => import('./components/AuditLog/AuditLog.vue'),
            meta: {
                auth: true
            },
        },
    ]
});


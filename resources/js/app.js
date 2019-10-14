import Vue from "vue";
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import {routes} from "./routes/routes";
import Axios from "axios";
import Swal from 'sweetalert2';

// window.Vue = require('vue');

Vue.prototype.$http = Axios;
Vue.use(Vuetify);
Vue.use(VueRouter);

const vuetify = new Vuetify({
    theme: {
        dark: true,
    },
});

const router = new VueRouter({
    mode: 'history',
    routes
});

// Authentication Check
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        if (localStorage.getItem('jwt') == null) {
            next({
                path: '/login',
                params: {nextUrl: to.fullPath}
            })
        } else {
            next();
        }
    } else {
        next()
    }
});

const app = new Vue({
    el: '#app',
    vuetify,
    router,
    Axios,
    iconfont: 'mdi'
});

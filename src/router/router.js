import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/home/home.vue';
import User from '../components/user/user.vue';
import News from '../components/news/news.vue';
import Demo from '../components/demo/demo.vue';
import NewsDetails from '../components/news/news-details.vue';
import Area from '../components/news/area.vue';
import Reg from '../components/home/reg.vue';
import Login from '../components/home/login.vue';
import Animate from '../components/animate/animate.vue';
import VueStore from '../components/vuex/parent.vue';


Vue.use(VueRouter);
export default new VueRouter({
    linkActiveClass: 'active', //更改默认选中class名
    routes: [{
        path: '/home',
        component: Home,
        children: [{
            path: 'reg',
            name: 'reg',
            component: Reg
        }, {
            path: 'login',
            name: 'login',
            component: Login
        }]
    }, {
        path: '/user',
        component: User
    }, {
        path: '/news',
        component: News
    },{
        path: '/news/:id',
        name: 'newsdetails',
        component: NewsDetails,
        children: [{
            path: ':aid',
            name: 'area',
            component: Area
        }]
    }, {
        path: '/demo',
        name: 'demo',
        component: Demo
    }, {
        path: '/animate',
        name: 'animate',
        component: Animate
    }, {
        path: '/vuex',
        name: 'vuex',
        component: VueStore
    }, {
        path: '*',
        redirect: '/home'
    }]
})
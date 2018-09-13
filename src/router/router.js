import Vue from 'vue';
import VueRouter from 'vue-router';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(NProgress);

// import Home from '../components/home/home.vue';
// import User from '../components/user/user.vue';
// import News from '../components/news/news.vue';
// import Template from '../components/template/template';
// import NewsDetails from '../components/news/news-details.vue';
// import Area from '../components/news/area.vue';
// import Reg from '../components/home/reg.vue';
// import Login from '../components/home/login.vue';
// import Animate from '../components/animate/animate.vue';
// import VueStore from '../components/vuex/parent.vue';

/**
 * 路由懒加载
 */
const Home = resolve => require(['../components/home/home.vue'], resolve);
const User = resolve => require(['../components/user/user.vue'], resolve);
const News = resolve => require(['../components/news/news.vue'], resolve);
const Template = resolve => require(['../components/template/template.vue'], resolve);
const NewsDetails = resolve => require(['../components/news/news-details.vue'], resolve);
const Area = resolve => require(['../components/news/area.vue'], resolve);
const Reg = resolve => require(['../components/home/reg.vue'], resolve);
const Login = resolve => require(['../components/home/login.vue'], resolve);
const Animate = resolve => require(['../components/animate/animate.vue'], resolve);
const VueStore = resolve => require(['../components/vuex/parent.vue'], resolve);
const Bug = resolve => require(['../components/bug/bug.vue'], resolve);
const Render = resolve => require(['../components/render/render.vue'], resolve);


Vue.use(VueRouter);
const router = new VueRouter({
    linkActiveClass: 'active', //更改默认选中class名
    routes: [{
        path: '/home',
        name: 'home',
        component: Home,
        meta: { // 路由信息
            auth: false
        },
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
        name: 'user',
        component: User
    }, {
        path: '/news',
        name: 'news',
        component: News
    }, {
        path: 'news/:id',
        name: 'newsdetails',
        component: NewsDetails,
        children: [{
            path: ':aid',
            name: 'area',
            component: Area
        }]
    }, {
        path: '/template',
        name: 'template',
        component: Template
    }, {
        path: '/animate',
        name: 'animate',
        component: Animate
    }, {
        path: '/vuex',
        name: 'vuex',
        component: VueStore
    }, {
        path: '/bug',
        name: 'bug',
        component: Bug
    }, {
        path: '/render',
        name: 'render',
        component: Render
    }, {
        path: '*',
        redirect: '/home'
    }]
});

router.beforeEach((to, from, next) => {
    console.log(to)
    NProgress.start();
    next();
});
router.afterEach(() => {
    NProgress.done();
})

export default router;
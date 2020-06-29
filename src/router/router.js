import Vue from 'vue'
import VueRouter from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(NProgress)

// import Home from '../pages/home/home.vue'
// import User from '../pages/user/user.vue'
// import News from '../pages/news/news.vue'
// import Template from '../pages/template/template'
// import NewsDetails from '../pages/news/news-details.vue'
// import Area from '../pages/news/area.vue'
// import Reg from '../pages/home/reg.vue'
// import Login from '../pages/home/login.vue'
// import Animate from '../pages/animate/animate.vue'
// import VueStore from '../pages/vuex/parent.vue'

/**
 * 路由懒加载
 */
const Home = resolve => require(['../pages/home/home.vue'], resolve)
const User = resolve => require(['../pages/user/user.vue'], resolve)
const News = resolve => require(['../pages/news/news.vue'], resolve)
const Template = resolve => require(['../pages/template/template.vue'], resolve)
const NewsDetails = resolve => require(['../pages/news/news-details.vue'], resolve)
const Area = resolve => require(['../pages/news/area.vue'], resolve)
const Reg = resolve => require(['../pages/home/reg.vue'], resolve)
const Login = resolve => require(['../pages/home/login.vue'], resolve)
const Animate = resolve => require(['../pages/animate/animate.vue'], resolve)
const VueStore = resolve => require(['../pages/vuex/parent.vue'], resolve)
const Bug = resolve => require(['../pages/bug/bug.vue'], resolve)
const Render = resolve => require(['../pages/render/render.vue'], resolve)
const Example = resolve => require(['../pages/example/index.vue'], resolve)
const Table = resolve => require(['../pages/Table/index.vue'], resolve)

Vue.use(VueRouter)
const router = new VueRouter({
    linkActiveClass: 'active', // 更改默认选中class名
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
        path: '/example',
        name: 'example',
        component: Example
    }, {
        path: '/table',
        name: 'table',
        component: Table
    }, {
        path: '*',
        redirect: '/home'
    }]
})

router.beforeEach((to, from, next) => {
    console.log(to)
    NProgress.start()
    next()
})
router.afterEach(() => {
    NProgress.done()
})

export default router

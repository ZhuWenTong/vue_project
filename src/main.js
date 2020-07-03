import Vue from 'vue'
import App from './App.vue'

import 'element-ui/lib/theme-chalk/index.css'
//import 'vue2-animate/dist/vue2-animate.min.css'
import './assets/animate.min.css'

import elementUI from './static/elementUI'
import directives from './static/directives'

import router from './router/router'
import store from './store/index'

Vue.use(elementUI)
Vue.use(directives)


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

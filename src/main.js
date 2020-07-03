import Vue from 'vue'
import App from './App.vue'

import 'element-ui/lib/theme-chalk/index.css'
//import 'vue2-animate/dist/vue2-animate.min.css'
import './assets/animate.min.css'

import elementUI from './static/elementUI'

import router from './router/router'
import store from './store/index'

import FixedEltableHeader from './directives/fixed-eltable-header'
import TransferDom from './directives/transfer-dom'

Vue.use(elementUI)

//全局自定义指令
Vue.directive('pColor', {
	bind(el, binding) {
		el.style.color = binding.arg
	}
})
Vue.directive('fixed-eltable-header', FixedEltableHeader)
Vue.directive('transfer-dom', TransferDom)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

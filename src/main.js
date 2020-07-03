import Vue from 'vue'
import App from './App.vue'

import 'element-ui/lib/theme-chalk/index.css'
//import 'vue2-animate/dist/vue2-animate.min.css'
import './assets/animate.min.css'

import {Collapse, Button, Rate, Pagination, Progress, Input, Card, Notification, Message, Table, TableColumn, Row, Col, Loading} from 'element-ui'

import router from './router/router'
import store from './store/index'

import FixedEltableHeader from './directives/fixed-eltable-header'
import TransferDom from './directives/transfer-dom'

Vue.use(Collapse)
Vue.use(Button)
Vue.use(Rate)
Vue.use(Pagination)
Vue.use(Progress)
Vue.use(Input)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Col)
Vue.use(Loading)

Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

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

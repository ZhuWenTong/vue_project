import Vue from 'vue'
import App from './App.vue'

import 'element-ui/lib/theme-chalk/index.css';

import {Collapse, Button, Rate, Pagination, Progress, Input, Card} from 'element-ui';

import router from './router/router';
import store from './store/index'

Vue.use(Collapse);
Vue.use(Button);
Vue.use(Rate);
Vue.use(Pagination);
Vue.use(Progress);
Vue.use(Input);
Vue.use(Card);

//全局自定义指令
Vue.directive('pColor', {
	bind(el, binding) {
		el.style.color = binding.arg;
	}
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
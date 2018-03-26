<template>
	<div id="wrap-info">
		<div class="info">
			<el-input type="text" v-model='msg' placeholder='给子组件传值'></el-input>
			<p>{{msg}}</p>
			<!--父传子 props  子传父 emit-->
			<Son :title='msg' @fromSon="getSonMsg">
				<!--插槽-->
				<p slot='slot1' v-changeColor>slot1</p>
				<p slot='slot2' slot-scope='props'>{{props.title}}</p>
			</Son>
			<p class="miniborder">子组件传来: <span v-pColor:#409EFF>{{sonMsg}}</span></p>
			<!--加上keep-alive 不会重新加载组件 缓存在内存中-->
			<keep-alive>
				<!--动态组件-->
				<component :is='currentView'></component>
			</keep-alive>
			<el-button @click='changeView'>切换组件</el-button>
		</div>
	</div>
</template>
<script>
	import Son from './son';
	import A from './a.vue';
	import B from './b.vue';

	export default {
		name: 'demo',
		data() {
			return {
				msg: '',
				sonMsg: '',
				flag: true,
				currentView: 'A'
			}
		},
		methods: {
			getSonMsg(data) {
				console.log(data)
				this.sonMsg = data;
			},
			changeView() {
				this.flag = !this.flag;
				this.currentView = this.flag ? 'A' : 'B';
			}
		},
		//局部自定义指令
		directives: {
			changeColor: {
				inserted(el) {
					el.onclick = function() {
						this.style.color = '#f56c6c';
					}
				}
			}
		},
		components: {
			Son,
			A,
			B
		}
	}
</script>
<style scoped lang='scss'>
	@import '../../assets/common';
	#wrap-info {
		width: 100%;
		.info {
			width: 1600px;
			margin: 0 auto;
		}
	}
	.el-input {
		width: 200px;
	}
	p {
		line-height: $li-height;
	}
</style>
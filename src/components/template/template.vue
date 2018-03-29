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
				<transition name='component-fade' mode='out-in'>
					<!--动态组件-->
					<component :is='currentView'></component>
				</transition>
			</keep-alive>
			<el-button @click='changeView'>切换组件</el-button>
			<div class="btn">
				<Btn></Btn>
				<Btn></Btn>
				<Btn></Btn>
			</div>
		</div>
	</div>
</template>
<script>
	import Son from './son';
	import A from './a.vue';
	import B from './b.vue';
	import Btn from './children/btn';

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
			B,
			Btn
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
	.component-fade-enter-active, .component-fade-leave-active {
	  	transition: opacity .3s ease;
	}
	.component-fade-enter, .component-fade-leave-to
	/* .component-fade-leave-active for below version 2.1.8 */ {
	  	opacity: 0;
	}
	.btn {
		@include borders(0);
		@include flexes(row, flex-start, center);
		margin-top: 10px;
		padding-top: 10px;
		div {
			margin-right: 4px;
		}
	}
</style>
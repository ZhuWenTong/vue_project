<style lang='scss' scoped>
	@import '../../assets/common.scss';
	.bug {
		width: 1600px;
		margin: 0 auto;
		.miniborder {
			@include borders(100%);
		}
	}
</style>
<template>
	<div class="bug">
		<el-card shadow="hover">
			<div slot="header">
				<span>对象嵌套对象 渲染二级数据报错</span>
			</div>
			<p>解决方法加上v-if: </p>
			<p v-text='obj.content' class="miniborder"></p>
			<p>{{obj.name}}</p>
			<p v-if='obj.like'>{{obj.like.sport}}</p>
			<p v-if='obj.like'>{{obj.like.ball.id}}</p>
		</el-card>
		<el-card shadow='hover'>
			<div slot='header'>
				router-view复用组件时不刷新
			</div>
			<div>
				<p>解决方法</p>
				<p>1. watch</p>
				<p>2. {{obj.routerKey}}</p>
				<p>3. beforeRouteLeave(to, from, next){}</p>
			</div>
		</el-card>
	</div>
</template>
<script>
	export default {
		name: 'bug',
		data() {
			return {
				obj: {}
			}
		},
		methods: {

		},
		mounted() {
			this.obj = {
				name: 'zhangsan',
				content: "<p v-if='obj.like'>{{obj.like.sport}}</p>",
				like: {
					sport: 'run',
					ball: {
						id: 'basketball'
					}
				},
				routerKey: `<router-view :key='s'></router-view>`
			}
		}
	}
</script>
<style lang="scss" scoped>
	.el-card {
		float: left;
		margin-right: 10px;
	}
</style>
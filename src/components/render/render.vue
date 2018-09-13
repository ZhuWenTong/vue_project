<template>
	<div class="render">
		<el-card>
			<div slot='header'>
				<span>render函数</span>
			</div>
			<div>
				<div>
					<p v-for='peo in peoples' :key='peo.name'>{{peo.name}}</p>
				</div>
				<Show :info='obj' />
			</div>
			
		</el-card>
	</div>
</template>
<script>
	import Show from './children/show.vue';
	export default {
		data() {
			return {
				peoples: [{
					name: 'zhangsan',
					age: 18
				}, {
					name: 'lisi',
					age: 20
				}],
				obj: {
					name: 'wangwu'
				}
			}
		},
		mounted() {
			console.log(this.peoples)
		},
		methods: {

		},
		components: {
			Show
		}
	}
</script>
<style lang='scss' scoped>
	@import '../../assets/common';
	.render {
		width: 1600px;
		margin: 0 auto;
	}
</style>
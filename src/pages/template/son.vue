<template>
	<el-card>
		<div slot='header'>son组件</div>
		<p>父组件传来: <span v-pColor:#f56c6c>{{title}}</span></p>
		<slot name='slot1'></slot>
		<el-input placeholder="给父组件传值" v-model="sonMsg"  @input="sendMsg"></el-input>
		<slot name='slot2' title='slot2传来'></slot>
		
	</el-card>
</template>
<script>
	export default {
		props: ['title'],
		data () {
			return {
				sonMsg: ''
			}
		},
		methods: {
			sendMsg () {
				// 传值给父组件
				this.$emit('fromSon', this.sonMsg)
			}
		}
	}
</script>
<style scoped>
	.el-input {
		width: 200px;
	}
	.el-card {
		width: 400px;
	}
</style>

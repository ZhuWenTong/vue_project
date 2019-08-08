<template>
	<div>
		<el-card>
			<div slot='header'>
				<span>child组件获取store中的state</span>
			</div>
			<div>
				<p>count: {{getCount}}</p>
				<el-button @click='countAdd'>add</el-button>
			</div>
		</el-card>
	</div>
</template>
<script>
	export default {
		data () {
			return {}
		},
		methods: {
			countAdd () {
				// this.$store.commit('ADD_COUNT', 1); 	// commit 调用mutations中的ADD_COUNT
				this.$store.dispatch('ADD_COUNT', 1) 	// actions所有异步操作 通过dispatch分发
			}
		},
		computed: {
			getCount () {
				// return this.$store.state.count;	  	// 获取状态
				return this.$store.getters.MIN_COUNT 	// getters
			}
		}
	}
</script>

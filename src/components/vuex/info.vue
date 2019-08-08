<template>
	<div>
		<el-card>
			<div slot='header'>
				<span>info组件获取store中的userInfo</span>
			</div>
			<div class="miniborder">
				<div>
					<p>Name: {{userInfo.name}}</p>
					<p>Age: {{userInfo.age}}</p>
				</div>
				<el-button @click='changeInfo'>changeInfo</el-button>
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
			changeInfo () {
				// this.$store.commit('USER_INFO', {name: 'lisi', age: 22}) // 不使用actions 使用 mutations
				// this.$store.state.userInfo.name = 'lisi'
				this.$store.dispatch('USER_INFO', {name: 'lisi', age: 22})	// 使用actions
			}
		},
		computed: {
			userInfo () {
				return this.$store.state.userInfo
			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../../assets/common.scss';
	.miniborder {
		@include flexes(row, space-between, center);
	}
</style>

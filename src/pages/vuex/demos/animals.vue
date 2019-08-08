<template>
	<div>
		<el-card>
			<div slot='header'>
				<span>animals组件获取state中animals信息 </span>
			</div>
			<div>
				<ul>
					<li v-for='animal in animals' :key='animal.name'>
						<span>{{animal.name}}</span> - 
						<span>{{animal.weight}}</span>
					</li>
				</ul>
			</div>
		</el-card>
	</div>
</template>
<script>
	export default {
		data () {
			return {}
		},
		methods: {},
		computed: {
			animals () {
				return this.$store.state.animals
			}
		}
	}
</script>

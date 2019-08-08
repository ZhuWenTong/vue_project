<template>
	<div>
		<p>{{num}}</p>
		<el-button plain round @click='add'> + </el-button>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				num: 0
			}
		},
		methods: {
			add () {
				this.num += 1
			}
		}
	}
</script>

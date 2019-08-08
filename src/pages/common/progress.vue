<template>
	<el-progress :percentage='percentageNum' status='exception' v-show='progressShow'></el-progress>
</template>
<script>
	export default {
		props: ['percentage', 'progressShow'],
		data () {
			return {}
		},
		computed: {
			percentageNum () {
				return this.percentage
			}
		},
		mounted () {
			let timer = setInterval(() => {
				this.$emit('getPercentage', this.percentageNum)
				if (this.percentageNum >= 99) {
					clearInterval(timer)
				}
			}, 10)
		}
	}
</script>

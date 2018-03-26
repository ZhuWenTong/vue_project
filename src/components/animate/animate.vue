<template>
	<div id="wrap-anim">
		<div class="anim">
			<p>animate</p>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		computed: {
			getCount() {
				return this.$store.state.count;
			}
		}
	}
</script>
<style lang='scss' scoped>
	@import '../../assets/common';
	#wrap-anim {
		width: 100%;
		.anim {
			width: 1600px;
			margin: 0 auto;
		}
	}
</style>
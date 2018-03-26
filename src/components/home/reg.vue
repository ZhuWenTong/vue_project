<template>
	<div>
		<p>{{p}}</p>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				p: ''
			}
		},
		mounted() {
			let p = this.$route.params.p;
			console.log(p)
			this.p = p;
		},
		methods: {

		}
	}
</script>

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
			this.writeP();
		},
		methods: {
			writeP() {
				let aid = this.$route.params.aid;
				console.log(aid)
				this.p = `这是${aid}`;
			}
		},
		watch: {
			$route() {
				this.writeP();
			}
		}
	}
</script>

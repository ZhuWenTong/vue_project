<template>
	<div>
		<p>{{p}}</p>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				p: ''
			}
		},
		mounted() {
			this.p = this.$route.params.p
		},
		methods: {

		}
	}
</script>

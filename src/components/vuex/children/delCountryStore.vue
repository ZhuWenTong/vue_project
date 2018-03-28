<template>
	<div>
		<p v-show='countries.length == 0'>这里是公共组件: store中无countries数据</p>
		<ul>
			<li v-for='country in countries' :key='country.id' >
				<el-button type='danger' @click='delCountry(country.id)'>{{country.name}}</el-button>
			</li>
		</ul>
	</div>
</template>
<script>
	import { mapState, mapActions } from 'vuex';
	export default {
		data() {
			return {

			}
		},
		methods: {
			...mapActions(['COUNTRIES']),
			delCountry(id) {
				//console.log(id);
				this.COUNTRIES({id, type:'del'});
			}

		},
		computed: {
			...mapState(['countries'])
		}
	}
</script>
<style lang='scss' scoped>
	p {
		color: #f56c6c;
	}
</style>
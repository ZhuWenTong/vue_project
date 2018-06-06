<style scoped lang='scss'>
	@import '../../../assets/common.scss';
	.miniborder {
		@include flexes(row, space-between, center);
	}
</style>
<template>
	<div>
		<el-card>
			<div slot='header'>
				<span>city组件获取state中的cars (mutations, actions)</span>
			</div>
			<div class="miniborder">
				<ul>
					<li v-for='city in cityInfo' :key='city.city'>
						<span>{{city.city}}</span> - 
						<span>{{city.num}}</span>
					</li>
				</ul>
				<el-button @click='changeCityInfo'>changeInfo</el-button>
				<!-- <el-button @click='CITIES_INFO'>changeInfo</el-button> -->
				<!-- <el-button @click='changeCityInfo("shenzhen")'>changeInfo</el-button> -->
			</div>
		</el-card>
	</div>
</template>
<script>
	import {mapActions} from 'vuex';
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			...mapActions(['CITIES_INFO']),  // 将 `this.CITIES_INFO()` 映射为 `this.$store.dispatch('CITIES_INFO')`
			changeCityInfo() {
				let city = {
					city: 'shenzhen',
					num: 500
				};
				this.CITIES_INFO(city);
			}
			
			// ...mapActions({
			// 	changeCityInfo: 'CITIES_INFO' // 将 `this.changeCityInfo()` 映射为 `this.$store.dispatch('CITIES_INFO')`
			// })
		},
		computed: {
			cityInfo() {
				return this.$store.state.cities;
			}
		}
	}
</script>

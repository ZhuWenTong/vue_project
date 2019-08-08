<template>
	<div>
		<el-card>
			<div slot='header'>
				<span>car组件获取state中的cars (mutations)</span>
			</div>
			<div class="miniborder">
				<ul>
					<li v-for='car in cars' :key='car.sign'>
						<span>{{car.sign}}</span> -
						<span>{{car.price}}</span>
					</li>
				</ul>
				<!-- <el-button @click='CARS_INFO'>changeInfo</el-button> -->
				<el-button @click='changeCarsInfo'>changeInfo</el-button>
			</div>
		</el-card>
	</div>
</template>
<script>
	import {mapState, mapMutations} from 'vuex'
	export default {
		data () {
			return {}
		},
		methods: {
			...mapMutations(['CARS_INFO']),
			changeCarsInfo() {
				let carInfo = {
					sign: 'BMW',
					price: 60
				}
				this.CARS_INFO(carInfo)
				// this.$store.commit('CARS_INFO', {sign: 'BMW', price: 60})
			}
			
		},
		computed: {
			...mapState(['cars'])
			// carsInfo() {
			// 	return this.$store.state.cars
			// }
		}
	}
</script>
<style lang='scss', scoped>
	@import '../../../assets/common.scss';
	.miniborder {
		@include flexes(row, space-between, center);
	}
</style>

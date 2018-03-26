<template>
	<div>
		<el-card>
			<div slot='header'>
				<span>car组件获取state中的cars (mutations)</span>
			</div>
			<div class="miniborder">
				<ul>
					<li v-for='car in carsInfo' :key='car.sign'>
						<span>{{car.sign}}</span> -
						<span>{{car.price}}</span>
					</li>
				</ul>
			</div>
			<el-button @click='changeCarsInfo'>changeInfo</el-button>
		</el-card>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			changeCarsInfo() {
				this.carsInfo.map((i) => {
					if(i.sign == 'BMW') {
						i.price = '60';
					}
				})
				console.log(this.carsInfo)
				this.$store.commit('CARS_INFO', this.carsInfo);
			}
		},
		computed: {
			carsInfo() {
				return this.$store.state.cars;
			}
		}
	}
</script>
<style lang='scss', scoped>
	@import '../../../assets/common.scss';
	
</style>
<template>
	<div>
		<el-card>
			<div slot='header'>
				<span>city组件获取state中的cars (mutations, actions)</span>
			</div>
			<ul>
				<li v-for='city in cityInfo' :key='city.city'>
					<span>{{city.city}}</span> - 
					<span>{{city.num}}</span>
				</li>
			</ul>
			<el-button @click='changeCityInfo'>changeInfo</el-button>
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
			changeCityInfo() {
				this.cityInfo.map((i) => {
					if(i.city == 'shenzhen') {
						i.num = 300
					}
				})
				console.log(this.cityInfo)
				this.$store.dispatch('CITIES_INFO', this.cityInfo);
			}
		},
		computed: {
			cityInfo() {
				return this.$store.state.cities;
			}
		}
	}
</script>
<style scoped lang='scss'>
	
</style>
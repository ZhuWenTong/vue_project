<template>
	<div id="wrap-store">
		<div class="store">
			<el-card>
				<div slot="header">
					<span>parent组件获取store中的state</span>
				</div>
				<div>
					<p>count:	{{getCount}}</p>
					<el-button @click='countMin'>min</el-button>
				</div>
			</el-card>
			<div class="child">
				<Child></Child>
			</div>
			<el-card>
				<div slot='header'>
					<span>parent组件中的userInfo</span>
				</div>
				<div>
					<p>Name: {{userInfo.name}}</p>
					<p>Age: {{userInfo.age}}</p>
				</div>
			</el-card>
			<div class="info">
				<Info></Info>
			</div>
		</div>
		<div class="vuex">
			<el-card>
				<div slot='header'>
					<span>parent组件获取store中的animals</span>
				</div>
				<div>
					<ul>
						<li v-for='animal in animals' :key='animal.name'>
							<span>{{animal.name}}</span> - 
							<span>{{animal.weight}}</span>
						</li>
					</ul>
				</div>
			</el-card>
			<div class="animals">
				<Animals></Animals>
			</div>
			<el-card>
				<div slot='header'>
					<span>parent组件获取store中的cars</span>
				</div>
				<div>
					<ul>
						<li v-for='car in carsInfo' :key='car.sign'>
							<span>{{car.sign}}</span> -
							<span>{{car.price}}</span>
						</li>
					</ul>
				</div>
			</el-card>
			<div class="car">
				<Cars></Cars>
			</div>
			<el-card>
				<div slot='header'>
					<span>parent组件获取state中的cities</span>
				</div>
				<ul>
					<li v-for='city in cityInfo' :key='city.city'>
						<span>{{city.city}}</span> - 
						<span>{{city.num}}</span>
					</li>
				</ul>
			</el-card>
			<div class="city">
				<City></City>
			</div>
		</div>
	</div>
</template>
<script>
	import Child from './child.vue';
	import Info from './info.vue';
	import Animals from './demos/animals.vue';
	import Cars from './demos/cars.vue';
	import City from './demos/city.vue';

	import {mapState} from 'vuex';

	export default {
		data() {
			return {

			}
		},
		methods: {
			countMin() {
				if(this.$store.state.count == 0) {
					return;
				}
				//this.$store.commit('MIN_COUNT', 1);
				this.$store.dispatch('MIN_COUNT', 1);
			}
		},
		// computed: {
		// 	getCount() {
		// 		//return this.$store.state.count;
		// 		return this.$store.getters.MIN_COUNT;

		// 	},
		// 	userInfo() {
		// 		return this.$store.state.userInfo;
		// 	},
		// 	animals() {
		// 		return this.$store.state.animals;
		// 	},
		// 	carsInfo() {
		// 		return this.$store.state.cars;
		// 	},
		// 	cityInfo() {
		// 		return this.$store.state.cities;
		// 	}
		// },
		// 使用mapState辅助函数
		// computed: mapState({
		// 	getCount: state => state.count,
		// 	userInfo: state => state.userInfo,
		// 	animals: state => state.animals,
		// 	carsInfo: state => state.cars,
		// 	cityInfo: state => state.cities
		// }),
		//computed属性名称与state子节点名称相同 可以传字符串数组
		computed: {
			...mapState(['userInfo', 'animals']),
			getCount() {
				return this.$store.state.count;
			},
			carsInfo() {
				return this.$store.state.cars;
			},
			cityInfo() {
				return this.$store.state.cities;
			}
		},
		components: {
			Child,
			Info,
			Animals,
			Cars,
			City
		}
	}
</script>
<style scoped lang='scss'>
	@import '../../assets/common.scss';
	#wrap-store {
		width: 100%;
		.vuex, .store {
			width: 1600px;
			margin: 0 auto;
			@include flexes(row, flex-start, center);
			flex-wrap: wrap;
			@include borders();
			.el-card {
				margin-right: 30px;
			}
			.el-card:nth-of-type(odd) {
				margin-left: 30px;
			}
		}
	}
</style>
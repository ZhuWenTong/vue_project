<style scoped lang='scss'>
	@import '../../assets/common.scss';
	#wrap-store {
		width: 100%;
		background: url('../../assets/img/bg.jpg') no-repeat center 0;
		background-color: #0c0c0e;
		.vuex, .store {
			width: 1600px;
			margin: 0 auto;
			@include flexes(row, flex-start, center);
			flex-wrap: wrap;
			@include borders();
			.el-card {
				margin-right: 15px;
			}
			.el-card:nth-of-type(odd) {
				margin-left: 15px;
			}
		}
		.el-input {
			width: 180px;
		}
	}
</style>
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
			<el-card>
				<div slot='header'>
					<span>获取store中countries数据(点击删除)</span>
				</div>
				<div>
					<delCountryStore></delCountryStore>
				</div>
			</el-card>
			<div class="country">
				<Country></Country>
			</div>
			<el-card>
				<div slot='header'>
					<span>store中使用modules</span>
				</div>
				<el-input type='text' placeholder='请输入游戏名' clearable v-model='game' @change='intGame' />
				<el-button type='success' @click='addGames'>添加</el-button>
				<ul>
					<li v-for='item in games' :key='item.name'>
						{{item.name}}
					</li>
				</ul>
			</el-card>
		</div>
	</div>
</template>
<script>
	import Child from './child.vue';
	import Info from './info.vue';
	import Animals from './demos/animals.vue';
	import Cars from './demos/cars.vue';
	import City from './demos/city.vue';
	import Country from './demos/country.vue';
	import delCountryStore from './children/delCountryStore.vue';

	import {mapState, mapActions} from 'vuex';

	export default {
		data() {
			return {
				canAdd: true,
				game: ''
			}
		},
		methods: {
			...mapActions('games', ['add_games']), // 映射modules中actions的方法
			countMin() {
				if(this.$store.state.count == 0) {
					return;
				}
				//this.$store.commit('MIN_COUNT', 1);
				this.$store.dispatch('MIN_COUNT', 1);
			},
			intGame(val) {
				this.canAdd = true;
			},
			addGames() {
				if(this.game) {
					this.games.map(i => {
						if(i.name == this.game) {
							this.canAdd = false;
							return;
						}
					})
					if(this.canAdd) {
						let obj = {
							name: this.game,
							id: this.game
						}
						this.add_games(obj); //调用add_games
					} else {
						// this.$message({
						// 	message: '不可重复添加',
						// 	type: 'warning'
						// });
						this.$message.warning('不可重复添加！')
					}
				}
			}
		},
		mounted() {
			console.log(this.$store.state)
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
			...mapState(['userInfo', 'animals']), //映射state中的对象
			...mapState('games', ['games']),
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
			City,
			Country,
			delCountryStore
		}
	}
</script>

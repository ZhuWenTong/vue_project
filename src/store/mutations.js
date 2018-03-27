import {ADD_COUNT, MIN_COUNT, USER_INFO, CARS_INFO, CITIES_INFO} from './mutation-types.js';
export default {
	[ADD_COUNT](state, n) {
		state.count += n;
	},
	[MIN_COUNT]:(state, n) => {
		state.count -= n;
	},
	// [USER_INFO](State, obj) {
	// 	   state.userInfo.name = obj.name;
	// },
	[USER_INFO](state, {name, age}) { // 解构
		state.userInfo.name = name;
		state.userInfo.age = age;
	},
	[CARS_INFO](state, carInfo) {
		// state.cars = arr;
		console.log(carInfo)
		state.cars.map((i) => {
			if(i.sign == carInfo.sign) {
				i.price = carInfo.price;
			}
		})
	},
	[CITIES_INFO](state, cityInfo) {
		//state.cities = arr;
		console.log(cityInfo)
		state.cities.map((i) => {
			if(i.city == cityInfo.city) {
				i.num = cityInfo.num;
			}
		})
	}
}
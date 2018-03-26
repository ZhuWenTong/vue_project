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
	[CARS_INFO](state, arr) {
		state.cars = arr;
	},
	[CITIES_INFO](state, arr) {
		state.cities = arr;
	}
}
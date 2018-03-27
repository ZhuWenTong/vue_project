import {ADD_COUNT, MIN_COUNT, USER_INFO, CARS_INFO, CITIES_INFO, COUNTRIES} from './mutation-types.js';
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
	},
	[COUNTRIES](state, data) {
		console.log(data)
		//state.countries.push(data);
		if(data.type == 'add') {
			if(JSON.stringify(state.countries).indexOf(JSON.stringify(data.add_country)) == -1) {
				state.countries.push(data.add_country);
			} else {
				console.log('不可重复添加')
			}
		} else {
			for(let i = 0; i < state.countries.length; i++) {
				if(state.countries[i].id == data.id) {
					state.countries.splice(i, 1);
					return ;
				}
			}
		}
	}
}
import { ADD_COUNT, MIN_COUNT, USER_INFO, CARS_INFO, CITIES_INFO, COUNTRIES } from './mutation-types.js'
export default {
    [ADD_COUNT] (state, n) {
        state.count += n
    },
    [MIN_COUNT]: (state, n) => {
        state.count -= n
    },
    // [USER_INFO](State, obj) {
    // 	   state.userInfo.name = obj.name
    // },
    [USER_INFO]({ userInfo }, { name, age }) { // 解构
        userInfo.name = name
        userInfo.age = age
    },
    [CARS_INFO]({ cars }, carInfo) {
        // state.cars = arr
        console.log(carInfo)
        cars.map((i) => {
            if (i.sign == carInfo.sign) {
                i.price = carInfo.price
            }
        })
    },
    [CITIES_INFO]({ cities }, cityInfo) {
        // state.cities = arr
        console.log(cityInfo)
        cities.map((i) => {
            if (i.city == cityInfo.city) {
                i.num = cityInfo.num
            }
        })
    },
    [COUNTRIES]({ countries }, data) {
        console.log(data)
        // state.countries.push(data)
        if (data.type == 'add') {
            countries.push(data.add_country)
        } else {
            for (let i = 0; i < countries.length; i++) {
                if (countries[i].id == data.id) {
                    countries.splice(i, 1)
                    return
                }
            }
        }
    }
}

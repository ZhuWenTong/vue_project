import { ADD_COUNT, MIN_COUNT, USER_INFO, CITIES_INFO, COUNTRIES } from './mutation-types.js'
export default {
	[ADD_COUNT]: (context, n) => {
		context.commit(ADD_COUNT, n)
	},
	[MIN_COUNT]: (context, n) => {
		context.commit(MIN_COUNT, n)
	},
	[USER_INFO]: (context, obj) => {
		context.commit(USER_INFO, obj)
	},
	[CITIES_INFO]: (context, arr) => {
		context.commit(CITIES_INFO, arr)
	},
	[COUNTRIES]: (context, data) => {
		context.commit(COUNTRIES, data)
	}
}

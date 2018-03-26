import {MIN_COUNT} from './mutation-types.js';
export default {
	[MIN_COUNT]: state => {
		return state.count > 0 ? state.count : 0;
	}
}
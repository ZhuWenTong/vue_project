import Vue from 'vue';
import Vuex from 'vuex';

import games from './games/games.js';
import state from './states.js';
import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions,
	modules: {
		games
	}
})
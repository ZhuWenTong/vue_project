const state = {
	games: [{
		name: '英雄联盟',
		id: '1'
	}, {
		name: '绝地求生',
		id: '2'
	}]
}

const mutations = {
	set_games: (state, data) => {
		console.log(data)
		state.games.push(data);
	}
}

const actions = {
	add_games : ({commit}, data) => {
		console.log(data)
		commit('set_games', data);
	}
}

const getters = {
	games: state => state.games
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
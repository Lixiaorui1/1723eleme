import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
	username:"注册/登录",
}

// 持久化：从本地取出数据
if(localStorage.getItem("data")) {
	var data = JSON.parse(localStorage.getItem("data"));
	state = data;
}

function saveTolocal (state) {
	// 持久保存数据
	localStorage.setItem("data",JSON.stringify(state))
	console.log(state);
}

const mutations = {
	setUserName: function (state, username) {
		state.username = username;
		saveTolocal(state);
	}
}

const actions = {
	setUserName: function ({commit}, username) {
		commit("setUserName",username)
	},
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})
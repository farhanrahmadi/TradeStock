// sumber data
import stocks from '../../data/stocks.js'

// state adalah konstanta yang menampung semua data yang akan di export
const state = {
	stock: []
};

// mutations adalah logic untuk perpindahan/perubahan state
const mutations = {
	'SET_STOCK' (state, stock){
		state.stock = stocks;

	},
	'RND_STOCK' (state){

	}
};

// actions adalah segala tindakan yang akan mempengaruhi actions
const actions = {
	buyStock: ({commit}, order) => {
		commit();
	},
	initStock:({commit}) => {
		commit('SET_STOCK', stocks)
	},
	randomizeStock: ({commit}) => {
		commit('RND_STOCK')
	}
};

// getters adalah mengummpulkan data state untuk di gunakan di compnent lain
const getters = {
	stocks: state => {
		return state.stock;

	}
};

// semua data dan logic di sebagai object 
export default {
	state,mutations,
	actions,getters
};
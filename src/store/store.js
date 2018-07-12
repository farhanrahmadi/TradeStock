// import library yang di butuhkan
import Vue from 'vue'
import Vuex from 'vuex'
//data berhubungan denga stock
import stocks from './modules/stock.js'

Vue.use(Vuex);

// data yaang akan di export menjadi store
export default new Vuex.Store({
	modules: {
		stocks
	}
})
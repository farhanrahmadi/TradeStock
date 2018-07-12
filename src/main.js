import Vue from 'vue'

// import vuer router supaya bisa di gunakan
import VueRouter from 'vue-router'


import App from './App.vue'

// import list routes yang sudah di buat 
import { routes } from './routes'

// import file yang menampung semua store
import store from './store/store.js'
 
 // router di jadikan plugin 
Vue.use(VueRouter);

// list routes di buat connfiguasi sehingga dengan konstanta
const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
  el: '#app',
  // vuerouter di include ke dalam app
  router,
  // store di include ke dalam  app
  store,
  render: h => h(App)
})

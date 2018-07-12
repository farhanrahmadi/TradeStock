import Home from './components/Home.vue'
import Portofolio from './components/portofolio/Portofolio.vue'
import Stocks from './components/stock/Stocks.vue'

export const routes = [
	{path: '/', component: Home },
	{path: '/portofolio', component: Portofolio},
	{path: '/Stocks', component: Stocks}
]
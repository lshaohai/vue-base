// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'


import Home from './components/Home.vue'
import About from './components/About.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
	routes: [
		{ path:"/" , component: Home},		
		{ path:"/about" , component: About}		
	],
  mode: "history"
})

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App />'
})

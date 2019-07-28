import Vue from 'vue'
import router from './router'
// import store from './store'
import App from './App.vue'
import pgsmain from './components/pgs-main.vue'
// import $ from 'jquery';

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(pgsmain)
}).$mount('#app')

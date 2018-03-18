import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },//{ App: App}ES6
  template: '<App/>'
})

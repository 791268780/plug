import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  error:require('./assets/19.jpg'),
  loading:require('./assets/18.jpg')
 })

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

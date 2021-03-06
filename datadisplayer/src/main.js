import Vue from 'vue'
import App from './App.vue'
import { CardPlugin,PaginationPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(CardPlugin)
Vue.use(PaginationPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

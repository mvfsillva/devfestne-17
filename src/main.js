// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'style/main.styl'
import 'bootstrap/dist/css/bootstrap.min.css'
import vueSmoothScroll from 'vue-smooth-scroll'

// Vue.use(Bootstrap)

Vue.config.productionTip = false
Vue.use(vueSmoothScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BottomNav from './components/BottomNav'
import Mint from 'mint-ui';
import touch from 'vue-directive-touch'
import store from './vuex'//Vuex的配置文件
import 'mint-ui/lib/style.css'

Vue.use(Mint);
Vue.use(touch);

Vue.component("BottomNav",BottomNav)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

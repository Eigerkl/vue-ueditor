// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import ElementUI from 'element-ui'
// 倒入 http 文件夹下的 index.js
import api from './http/index'


Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(axios);
Vue.use(api);

// 此时可以直接在 Vue 原型上调用 $api 了
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

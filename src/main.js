import Vue from 'vue'
import App from './App.vue'
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less';



import router from '../router'

import http from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI);

import VueWechatTitle from 'vue-wechat-title'; 
Vue.use(VueWechatTitle)
Vue.prototype.$http=http;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

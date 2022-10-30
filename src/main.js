import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import "./ModuleA/EventBus/eventbus.js";
import "./ModuleC/directives";
//import Toast from './ModuleC/plugins/toast';
//import "./ModuleC/plugins/toast/toast.css"
import "./ModuleC/filter";
import axios from 'axios';
import VueRouter from 'vue-router';
import router from './router';
import 'es6-promise';
import vueX from 'vuex';


Vue.prototype.$axios = axios //receive axios into prototype so tha import once only
//default root DNS
//axios.defaults.baseURL = 'http://iwenwiki.com';
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

axios.interceptors.request.use(
  config=>{
    console.log(config)
    return config
},
error=>{
  Promise.reject(error)
})
axios.interceptors.response.use(
  config=>{
    console.log(config)
    return config
},
error=>{
  Promise.reject(error)
})

Vue.use(vueX)
Vue.config.productionTip = false
Vue.use(VueRouter)
//Vue.use(Toast)
// Vue.mixin({
  //global mixin
//   data(){
//     return "v.3.0.x"
//   },
//   mounted(){
//     console.log("Component Mounted")
//   }
// })
const store = new vueX.Store({
  state:{
    userId:0
  }
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import "./ModuleA/EventBus/eventbus.js"
import "./ModuleC/directives"
Vue.config.productionTip = false

// Vue.mixin({
  //global mixin
//   data(){
//     return "v.3.0.x"
//   },
//   mounted(){
//     console.log("Component Mounted")
//   }
// })

new Vue({
  // data:{
  //   version:"v.2.x"
  // },
  // methods:{
  //   setVersion(){
  //     return "v.3.0.x"
  //   }
  // },
  render: h => h(App),
}).$mount('#app')

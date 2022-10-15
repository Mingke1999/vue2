import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  data:{
    version:"v.2.x"
  },
  methods:{
    setVersion(){
      return "v.3.0.x"
    }
  },
  render: h => h(App),
}).$mount('#app')

import Vue from "vue";
const Bus = new Vue();
Object.defineProperties(
    Vue.prototype,{
        $bus:{
            get(){
                return Bus
            }
        }
    }
)
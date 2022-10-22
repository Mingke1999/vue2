import Vue from "vue";
Vue.filter("money",function(val){
    if(val){
        return "$" + val;
    }
    })
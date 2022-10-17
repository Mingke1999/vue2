import Vue from "vue";

//v-foucus
Vue.directive("focus",{
  
    inserted(el){
      console.log(el);
      el.focus();
    }
})

//v-red
Vue.directive("red",{
  
    inserted(el){
     el.style.color = "#ff0000"
    }
})
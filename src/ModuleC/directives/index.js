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

//5 hook function
Vue.directive("myShow",{
    bind(el,binding,vnode,oldVnode){
        //console.log("bound to the element")
    },
    inserted(el,binding,vnode,oldVnode){
        console.log(binding.name)
        console.log(binding.value)
        //console.log("element inserted into its parent node")
    },
    update(el,binding,vnode,oldVnode){
        console.log("before update: "+el.innerHTML)
        //console.log("component updated")
    },
    componentUpdated(el,binding,vnode,oldVnode){
        console.log("Component Updated: "+el.innerHTML)
        //console.log("all updated")
    },
    unbind(el,binding,vnode,oldVnode){
        //console.log("unbind")
    }
})
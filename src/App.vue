<template>
  <div id="app">
    
    <!-- Module A -->
    <!--<Service/>
        <Parent/>
        <Slot>
          <template v-slot:header>
            <div>Header</div>
            <div>Hello A New Slot</div>
          </template>
          <template #footer="slotProps">
            <div>Footer: {{slotProps.message}}</div>
            <div>Hello A New Slot</div>
          </template>
        </Slot>
        <Slot />
        <keep-alive include="SelectA" exclude="SelectB">
          <component :is="current"></component>
        </keep-alive>
        <button @click="clickHandle">switch</button>
        <Hello/>
        <LifeCycleVue/>
        <Child1/>
        <Child2/> -->

    <!--Module B-->
    <!-- <Animation/> -->

    <!--Module C-->
    <!-- <Minxins/>
    <Child/>
    <MyDirectivesVue/>
    <RenderVue/>
    <ul>
      <li v-for="(item,index) in order" :key="index">
        <span>{{item.name}}</span><span>{{item.price | money}}</span>
      </li>
    </ul>
    <div>
      <p>
        {{bookName | author}}
      </p>
      <p>
        {{"Another Book" | author}}
      </p>
      <p>
        {{"Another Book" | author | money}}
      </p>
    </div> -->
    
    <!-- Module D -->
    <!-- <FirstAxios/> -->
    <PackagingVue/>
  </div>
</template>

<script>
// import Service from './ModuleA/Components/Service.vue';
// import Parent from './ModuleA/Sync/Parent.vue';
// import Slot from './ModuleA/Slot/Slot.vue';
// import SelectA from './ModuleA/Dynamic/SelectA.vue';
// import SelectB from './ModuleA/Dynamic/SelectB.vue';
// const SelectB = () => import("./ModuleA/Dynamic/SelectB.vue") //method 1
// const SelectB = () => ({ //method 2
//   component:import("./ModuleA/Dynamic/SelectB.vue"),
//   delay:3000, //priority 200 1000 3000
//   error:'Some Error',
// })
// import Hello from './ModuleA/Edges/Hello.vue'
// import LifeCycleVue from './ModuleA/LifeCycle/LifeCycle.vue';
// import Child1 from './ModuleA/EventBus/Child1.vue';
// import Child2 from './ModuleA/EventBus/Child2.vue';
// import Animation from './ModuleB/Animation.vue';

// import Minxins from './ModuleC/Mixins.vue';
// import Child from './ModuleC/Child.vue';
//import MyDirectivesVue from './ModuleC/MyDirectives.vue';
//import RenderVue from './ModuleC/rendering.vue';

//import FirstAxios from './ModuleD/FirstAxios.vue'
import PackagingVue from './ModuleD/Packaging.vue'
export default {
  name: 'App',
  components: {
    // Service,
    // Parent,
    // Slot,
    // SelectA,
    // SelectB,
    // Hello,
    // LifeCycleVue,
    // Child1,
    // Child2
    //Animation
    // Minxins,
    // Child,
    //MyDirectivesVue,
    //RenderVue
    //FirstAxios
    PackagingVue
},
data(){
return{
//current:SelectA,
message:"Message From App",
bookName:"Kevin Cooking tutorial",
order:[
  {
    id:1001,
    name:"candy",
    price:11
  },
  {
    id:1001,
    name:"honey",
    price:4.8
  }
]
}
},
filters:{ //must be filters
  author:function(val){
    if(val){
      return val + "Author: Mingke"
    }
  }
}
//methods:{
//     clickHandle(){
//       this.current = this.current === SelectA ? SelectB : SelectA
//     },
//  },
//   provide(){
//     return{
//       flag:'Something From App.vue'
//     }
// }
// mounted(){
//   this.$toast("My first toast",{duration:5000,defaultType:"danger"})
// }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

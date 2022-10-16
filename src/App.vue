<template>
  <div id="app">
    <!-- <Service/>
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
    <LifeCycleVue/> -->
    <Child1/>
    <!-- <Child2/> -->
  </div>
</template>

<script>
// import Service from './ModuleA/Components/Service.vue';
// import Parent from './ModuleA/Sync/Parent.vue';
// import Slot from './ModuleA/Slot/Slot.vue';
// import SelectA from './ModuleA/Dynamic/SelectA.vue';
// import SelectB from './ModuleA/Dynamic/SelectB.vue';
//const SelectB = () => import("./ModuleA/Dynamic/SelectB.vue") //method 1
// const SelectB = () => ({ //method 2
//   component:import("./ModuleA/Dynamic/SelectB.vue"),
//   delay:3000, //priority 200 1000 3000
//   error:'Some Error',
// })
// import Hello from './ModuleA/Edges/Hello.vue'
// import LifeCycleVue from './ModuleA/LifeCycle/LifeCycle.vue';
import Child1 from './ModuleA/EventBus/Child1.vue';
// import Child2 from './ModuleA/EventBus/Child2.vue';
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
    Child1,
    // Child2
},
data(){
//  return{
//     current:SelectA,
//     message:"Message From App"
//  }
},
methods:{
//     clickHandle(){
//       this.current = this.current === SelectA ? SelectB : SelectA
//     },
//  },
//   provide(){
//     return{
//       flag:'Something From App.vue'
//     }
  }
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

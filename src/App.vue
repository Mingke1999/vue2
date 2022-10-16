<template>
  <div id="app">
    <!-- <Service/> -->
    <!-- <Parent/> -->
    <!-- <Slot>
      <template v-slot:header>
        <div>Header</div>
        <div>Hello A New Slot</div>
      </template>
      <template #footer="slotProps">
        <div>Footer: {{slotProps.message}}</div>
        <div>Hello A New Slot</div>
      </template>
    </Slot>
    <Slot /> -->
    <!-- <keep-alive include="SelectA" exclude="SelectB">
      <component :is="current"></component>
    </keep-alive>
    <button @click="clickHandle">switch</button> -->
    <Hello/>
  </div>
</template>

<script>
//import Service from './Components/Service.vue';
//import Parent from './Sync/Parent.vue';
//import Slot from './Slot/Slot.vue';
//import SelectA from './Dynamic/SelectA.vue';
//import SelectB from './Dynamic/SelectB.vue';
// const SelectB = () => import("./Dynamic/SelectB.vue") //method 1
// const SelectB = () => ({ //method 2
//   component:import("./Dynamic/SelectB.vue"),
//   delay:3000, //priority 200 1000 3000
//   error:'Some Error',
// })
import Hello from './Edges/Hello.vue'
export default {
  name: 'App',
  components: {
    //Service
    //Parent
    //Slot,
    //SelectA,
    //SelectB,
    Hello
},data(){
  return{
    //current:SelectA
    message:"Message From App"
  }
},methods:{
    // clickHandle(){
    //   this.current = this.current === SelectA ? SelectB : SelectA
    // },
  },provide(){
    return{
      flag:'Something From App.vue'
    }
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

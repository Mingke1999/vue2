<template>
  <div id="app">
    <!-- <Service/> -->
    <Parent/>
  </div>
</template>

<script>
//import Service from './Components/Service.vue';
import Parent from './Sync/Parent.vue';
export default {
  name: 'App',
  components: {
    //Service
    Parent
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

<template>
  <div id="app">
    <!-- <Service/> -->
    <!-- <Parent/> -->
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
  </div>
</template>

<script>
//import Service from './Components/Service.vue';
//import Parent from './Sync/Parent.vue';
import Slot from './Slot/Slot.vue';

export default {
  name: 'App',
  components: {
    //Service
    //Parent
    Slot,
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

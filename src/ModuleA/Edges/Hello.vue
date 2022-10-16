<template>
  <div>
    <h3>Edge Cases</h3>
    <p ref="hello">Hello World</p>
    <button @click="getHello">Use Ref</button>
    <World/>
  </div>
</template>

<script>
import World from './World.vue'
export default {
    name:'edges',
    methods:{
        getHello(){
            console.log(this.$refs.hello);
            this.$refs.hello.innerHTML = 'New Value replaced Hello World'
        }
    },
    components:{
      World
    }
}
</script>

<style>

</style>
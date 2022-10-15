<template>
  <div>
    <h3>Edge Cases</h3>
    <p ref="hello">Hello World</p>
    <button @click="getHello">Use Ref</button>
  </div>
</template>

<script>
export default {
    name:'edges',
    methods:{
        getHello(){
            console.log(this.$refs.hello);
            this.$refs.hello.innerHTML = 'New Value replaced Hello World'
        }
    }
}
</script>

<style>

</style>
<template>
  <div>
    <h3>Child</h3>
    <button @click="clickHandle">Hide Child</button>
  </div>
</template>

<script>

export default {
    methods:{
        clickHandle(){
            this.$emit("hide:notShow",false)
        }
    }
}
</script>

<style>

</style>
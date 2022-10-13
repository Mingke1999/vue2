<template>
  <div>
    <h2>Child passing value to parent</h2>
    <button @click="clickHandle">Sent to parents</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            message:'The message from Capacity page'
        }
    },
    methods:{
        clickHandle(){
            this.$emit("onEvent",this.message)
        }
    }
}
</script>

<style>

</style>
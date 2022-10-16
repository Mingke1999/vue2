<template>
  <div>
    <h3>Child1</h3>
    <button @click="sendHandle">Send</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            msg:"Message from Child 1"
        }
    },
    methods:{
        sendHandle(){
            this.$bus.$emit("onMsg",this.msg)
        }
    }
}
</script>

<style>

</style>
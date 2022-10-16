<template>
  <div>
    <h3>Child1</h3>
    <button @click="sendHandle">Send</button>
    <button @click="showInput">show input and get focus</button>
    <input type="text" v-show="flag" ref="search"/>
  </div>
</template>

<script>
export default {
    data(){
        return{
            msg:"Message from Child 1",
            flag:false
        }
    },
    methods:{
        sendHandle(){
            this.$bus.$emit("onMsg",this.msg)
        },
        showInput(){
            this.flag = true;
            //the two line are too close so no time for DOM rendering
            this.$nextTick(()=>{ //make sure DOM works
                this.$refs.search.focus();
            })
        }
    }
}
</script>

<style>

</style>
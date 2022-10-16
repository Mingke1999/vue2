<template>
  <div>
    <h3>Watcher</h3>
    <input type="text" v-model="message"/>
  </div>
</template>

<script>
export default {
    data(){
        return{
            message:''
        }
    },
    watch:{
        //could be used to check the difference between inputs
        message(newVal,oldVal){
            console.log("new variable",newVal);
            console.log("old variable",oldVal);
            if(newVal==="last inout"){
                console.log("don't search");
            }else{
                console.log("new http request");
            }
        }
       
    }
}
</script>

<style>

</style>
<template>
  <div>
    <h3>Parent</h3>
    <button @click="clickHandle">Switch to display/hide Child</button>
    <!-- <Child v-show="flag" @hide="checkVisible"/> -->
    <!-- <Child v-show="flag" @hide:notShow="checkVisible"/> -->
    <!-- <Child v-show="flag" @hide:notShow="function(data){flag=data}"/> -->
    <!-- <Child v-show="flag" @hide:notShow="data=>flag=data"/> -->
    <Child v-show="flag" :notShow.sync="flag"/>
  </div>
</template>

<script>
import Child from './Child.vue'
export default {
    data(){
        return{
            flag:false
        }
    },
    components:{
            Child
    },
    methods:{
        clickHandle(){
            this.flag = true;
        },
        // checkVisible(data){
        //     this.flag = data
        // }
    }
}
</script>

<style>

</style>
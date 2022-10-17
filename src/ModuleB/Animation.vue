<template>
  <div>
    <h3>Animation</h3>
    <button @click="switchFlag">Switch</button>
    <transition name="fade">
        <p v-if="flag">{{message}}</p>
    </transition>
   
  </div>
</template>

<script>
export default {
    data(){
        return{
            flag:false,
            message:"Some message"
        }
    },
    methods:{
        switchFlag(){
            this.flag = this.flag === false ? true : false
        }
    }

}
</script>

<style>
.fade-enter{
    opacity: 0;
    font-size: 1rem;
}
.fade-enter-to{
    opacity: 1;
    font-size: 5rem;
}
.fade-enter-active{
    transition: all 1s;
}

.fade-leave{
  opacity: 1;
  font-size: 5rem;
}
.fade-leave-to{
  opacity: 0;
  font-size: 1rem;
}
.fade-leave-active{
    transition: all 1s;
}
</style>
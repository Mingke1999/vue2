<template>
  <div>
    <h3>Child</h3>
    <button @click="clickHandle">Switch</button>
    <p v-if="flag">Loading Finished</p>
  </div>
</template>

<script>
import myMixin from './flag';
export default {
 mixins:[myMixin],
 data(){
    return{
        flag:true
    }
 }
}
</script>

<style>

</style>
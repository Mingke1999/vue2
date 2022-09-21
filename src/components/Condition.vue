<template>
  <div>
    <p v-if="visible">Hi Dear</p>
    <p v-else>I am false value</p>
    <template v-if="visible">
        <p>1984</p>
        <p>HongKong WangJiao</p>
    </template>
    <template v-else>
        <p>1999</p>
        <p>LiaoNing ShenYang</p>
    </template>
    <p v-show="visible">Leonardo</p>
  </div>


</template>

<script>
    export default {
        data(){
            return{
                visible:false
            }
        }
    }
</script>

<style>

</style>
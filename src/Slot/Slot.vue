<template>
  <div>
    <h2>SLOT</h2>
    <slot name="header">default value</slot>
    <hr/>
    <slot name="footer" :message="message">default value</slot>
  </div>
</template>

<script>
export default {
    data(){
        return{
            message:"message from Slot"
        }
    }
}
</script>

<style>

</style>
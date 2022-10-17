<template>
  <div>
    <h3>Mixins</h3>
    <button @click="clickHandle">Switch</button>
    <p v-if="flag">Loading Finished</p>
  </div>
</template>

<script>
import myMixin from './flag';
export default {
  mixins:[myMixin]
}
</script>

<style>

</style>
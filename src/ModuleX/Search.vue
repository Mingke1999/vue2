<template>
  <div>
    <h3>Search</h3>
    <input type="text" v-model="message"/>
    <p>{{message}}</p>
    <hr/>
    <input type="text" :value="words" @input="newWords"/>
    <p>{{words}}</p>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';

export default {
   
    computed:{
        ...mapState(["words"]),
        message:{
            get(){
                return this.$store.state.message
            },
            set(value){
                this.$store.commit("updateMessage",value)
            }
        }
    },
    methods:{
        ...mapMutations(["updateWords"]),
        newWords(e){
            this.updateWords(e.target.value)
        }
    }
}
</script>

<style>

</style>
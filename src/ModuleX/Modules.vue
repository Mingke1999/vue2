<template>
  <div>
    <h3>VUEX MODULES</h3>
    Service Number: <p>{{$store.state.services.services}}</p>
    Event Number: <p>{{$store.state.events.events}}</p>
    Services Getters: <p>{{$store.getters["services/getServices"]}}</p>
    <button @click="moreServices">Increase</button>
    <hr/>
    <p>mapState Services: {{services}}</p>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';
export default {
methods:{
    ...mapMutations("services",["moreServices"]),
    ...mapActions("services",["asyncMoreServices"]),
    moreServices(){
        //this.$store.commit("services/moreServices")
        //this.$store.dispatch("services/asyncMoreServices")
        this.asyncMoreServices(10);
    }
},
computed:{
    ...mapState("services",["services"]),
    ...mapGetters("services",["getServices"])
}
}
</script>

<style>

</style>
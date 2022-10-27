<template>
  <div>
    <h3>Services</h3>
    <button @click="goHome">Home page</button>
    <p>current id: {{$route.params.id}}</p>
    <button @click="onUpdate">Test before router update</button>
    <button @click="cacheHandle">Caching</button>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      message:'Hello World'
    }
  },
    methods:{
        goHome(){
            //this.$router.push('/'); //1 2 1 2 3 1
            this.$router.push({name:'home'}); //named router
            //this.$router.replace('/'); //1 2 -> 1 2 3 no go back function
        },
        onUpdate(){
          this.$router.push({
            name:'service',
            params:{
              id:1002
            }
          })
        },
        cacheHandle(){
          this.message = "New message"
        }
    },
    beforeRouteEnter(to,from,next){
        // console.log("before route enter",this);
        // console.log("before route enter",from);
        // console.log("before route enter",to);
        next(vm=>{
          console.log(vm.message)
        });
    },
    beforeRouteUpdate(to,from,next){
        // console.log("before route Update",this);
        // console.log("before route Update",from);
        // console.log("before route Update",to);
        // console.log(this.message);
        next();
    },
    beforeRouteLeave(to,from,next){
        // console.log("before route leave",this);
        // console.log("before route leave",from);
        // console.log("before route leave",to);
        // console.log(this.message);
        next();
    },
    beforeCreate(){
        console.log("Before Create");
    },
    created(){
        console.log("Created");
    },
    beforeMount(){
        console.log("Before Mount");
    },
    mounted(){
        console.log("Mounted");
    },
    beforeUpdate(){
        console.log("Before Update");
    },
    //some content changes
    updated(){
        console.log("Updated");
    },
    beforeDestroy(){
        console.log("Before Destroy");
    },
    //it is called when a page is removed by routing
    destroyed(){
        console.log("Destroyed")
    },
    //two function only triggered when keep-alive is used
    activated(){
      console.log("activated")
    },
    deactivated(){
      console.log("deactivated")
    }
}
</script>

<style>

</style>
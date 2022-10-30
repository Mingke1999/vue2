<template>
  <div>
    <h3>{{userId}}</h3>
    <input type="text" v-model="num"/>
    <button @click="addHandle">+</button>
    <button @click="minHandle">-</button>
    <ul>
        <li v-for="(item,value,index) in details" :key="index">
            <p>{{item}} : {{value}}</p>
        </li>
    </ul>
    <button @click="newKeys">New Key-Value Pair</button>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
import {ADD_NUM} from './constants'
export default {
    // computed:{
    //     getUserId(){
    //         return this.$store.state.userId
    //     }
    // }
    // computed:mapState({
    //     userId:state=>state.userId
    // })
    //computed:mapState(["userId"])
    computed:{
        ...mapState(["userId","details"])
        //computed read
    },
    methods:{
        //methods operates
        ...mapMutations(["updateUser"]),
        addHandle(){
            this.$store.commit(ADD_NUM,parseInt(this.num))
           
        },
        // addHandle(){
        //     this.$store.commit({
        //         type:"anotherId",
        //         num:parseInt(this.num)
        //     })
        // },
       
        minHandle(){
            this.$store.commit("nextId",parseInt(this.num))
        },
        newKeys(){
            // this.$store.commit({
            //     type:"updateUser",
            //     key:"job",
            //     value:"ICT"
            // })
            this.updateUser({
                key:"job",
                value:"ICT"
            })
        }  
    },
    data(){
        return{
            num:0
        }
    }
}
</script>

<style>

</style>
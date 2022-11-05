import Vue from 'vue';
import 'es6-promise';
import vueX from 'vuex';
import { ADD_NUM } from '../constants';
import axios from 'axios';
import services from '../modules/services';
import events from '../modules/events';
Vue.use(vueX)

const logPlugin = store =>{
  //console.log(store)
  store.subscribe((mutation,state)=>{
    console.log("mutation",mutation);
    console.log("state",state)
  })
}
export default new vueX.Store({
    plugins:[logPlugin],
    strict:false,
    state:{
      userId:100,
      details:{
        name:'mingke',
        mood:'happy'
      },
      events:[],
      words:'',
      message:""
    },
    mutations:{
        [ADD_NUM](state,num){
            state.userId += num
        },
        nextId(state,num){
            state.userId -= num
        },
        updateUser(state,obj){
            Vue.set(state.details,obj.key,obj.value)
        },
        updateEvents(state,events){
          state.events = events
        },
        updateWords(state,words){
          state.words = words
        },
        updateMessage(state,message){
          state.message = message
        }
    },
    actions:{
      getEvents(context){
        axios.get("https://eventeasyau.azurewebsites.net/api/event/getall")
        .then(res=>{
          if(res.status === 200){
            context.commit("updateEvents",res.data.$values)
          }
        }).then(err=>{
            //context.commit("updateEvents",[])
            //don't commit any empty list otherwise get no result
            console.log(err)
        })
      }
    },
    getters:{
      validEvents(state){
        return state.userId >= 100 ? "Database is large":'A startup database'
      },
      getEventEasy:(state)=>(name)=>{
        return "name: "+name + " user number: "+state.userId
      }
    },
    modules:{
      services,
      events
    }
  })
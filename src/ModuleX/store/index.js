import Vue from 'vue';
import 'es6-promise';
import vueX from 'vuex';
import { ADD_NUM } from '../constants';
import axios from 'axios';

Vue.use(vueX)

const store = new vueX.Store({
    state:{
      userId:100,
      details:{
        name:'mingke',
        mood:'happy'
      },
      events:[]
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
    }
  })

  export default store
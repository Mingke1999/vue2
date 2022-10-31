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
          state.events = events.$values[0]
        }
    },
    actions:{
      getEvents(context){
        axios.get("https://eventeasyau.azurewebsites.net/api/event/getallactiveevents")
        .then(res=>{
          if(res.status === 200){
            context.commit("updateEvents",res.data)
          }
        }).then(err=>{
            context.commit("updateEvents",[])
        })
      }
    }
  })

  export default store
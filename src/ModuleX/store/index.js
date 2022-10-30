import Vue from 'vue';
import 'es6-promise';
import vueX from 'vuex';
import { ADD_NUM } from '../constants';

Vue.use(vueX)

const store = new vueX.Store({
    state:{
      userId:100,
      details:{
        name:'mingke',
        mood:'happy'
      }
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
        }
    }
  })

  export default store
export default{
    namespaced:true, //avoid module name repeat
    state:{
        services:1000
    },
    mutations:{
        moreServices(state,num){
            state.services += num;
        }
    },
    actions:{
        asyncMoreServices({dispatch,commit,getters,rootGetters},num){
            // console.log("rootGetters",rootGetters)
            // console.log("getters",getters)
            commit("moreServices",num)
        }
    },
    getters:{
        getServices(state){
            return state.services
        }
    }
}
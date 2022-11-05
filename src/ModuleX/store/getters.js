export default{
    validEvents(state){
        return state.userId >= 100 ? "Database is large":'A startup database'
      },
      getEventEasy:(state)=>(name)=>{
        return "name:  "+name + " user number: "+state.userId
      }
}
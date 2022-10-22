var Toast = {}
Toast.install = function(Vue,options){

    let opt = {
        duration:3000,
        defaultType:"success"
    }

    Vue.prototype.$toast = (tips,type) =>{
        if(type.duration){
            opt.duration = type.duration
        }
        if(type.defaultType){
            opt.defaultType = type.defaultType
        }
        let toastTpl = new Vue({
            render(){
                return(
                    <div class={["vue-toast","toast-"+opt.defaultType]}>
                        {tips}
                    </div>
                )
            }
        })
        let template = toastTpl.$mount().$el; //create an instance mount it to the document
        document.body.appendChild(template);    //append element
        setTimeout(function(){
            document.body.removeChild(template)
        },opt.duration)
    }

    ["success","danger","warning"].forEach(type=>{
        Vue.prototype.$toast[type] = (tips) =>{
            return Vue.prototype.$toast(tips,type)
        }
    })
}
export default Toast
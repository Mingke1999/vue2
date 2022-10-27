import VueRouter from "vue-router";
import Home from '../ModuleE/Home.vue';

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/dash',
            //async loading
            component:()=>import('../ModuleE/Dashboard.vue')
        },{
            path:'/details/:id',
            component:()=>import('../ModuleE/Details.vue')
        },{
            path:'*',
            component:()=>import('../ModuleE/NotFound.vue')
        }
    ]
})
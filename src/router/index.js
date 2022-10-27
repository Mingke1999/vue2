import VueRouter from "vue-router";
import Home from '../ModuleE/Home.vue';

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:Home,
            name:'home'
        },
        {
            path:'/dash',
            //async loading
            component:()=>import('../ModuleE/Dashboard.vue'),
            name:'dashboard'
           
        },{
            path:'/details/:id',
            component:()=>import('../ModuleE/Details.vue'),
            children:[
                {
                    path:'booking',
                    component:()=>import('../ModuleE/Details/Booking.vue')
                },
                {
                    path:'review',
                    component:()=>import('../ModuleE/Details/Review.vue')
                }
            ],
            name:'detail'
        },
        {
            path:'/service',
            component:()=>import('../ModuleE/Services.vue'),
            name:'service'
        },
        {
            path:'*',
            component:()=>import('../ModuleE/NotFound.vue')
        }
    ]
})
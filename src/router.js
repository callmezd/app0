import Vue from "vue";
import Router from "vue-router";
import Layout from "./views/Layout.vue";

import layoutIndex from "./views/route-views/layout/index1.vue";
import layoutMine from "./views/route-views/layout/mine.vue";
import layoutAbout from "./views/route-views/layout/about.vue";

import Notfind from "./views/Notfind.vue";
import Detail from "./views/Detail.vue";
import Loading from "./views/Loading.vue";
import register from "./views/register.vue";


Vue.use(Router);




 const router = new Router({
  mode: "history", // history
  base: process.env.BASE_URL,
  routes: [
    { path:'/',redirect:"/register"},
    { path:'/register',name:"register",component:register},
    { path:'/loading',name:"loading",component:Loading},
    {
      path: "/layout",
      name: "",
      component: Layout,
      children:[
        {path:'/',redirect:"index"},
        {name: 'index',path: 'index',component: layoutIndex, meta: { requiresAuth: true }},
        {name: 'mine',path: 'mine',component: layoutMine},
        {name: 'about',path: 'about',component: layoutAbout}
      ]
    },
    { path: "/detail",name: "detail",component: Detail},
    { path: "/not-find",name: "not-find",component: Notfind},
    { path: "*",redirect: "/not-find"}
  ],
  scrollBehavior(to, from, savedPosition){
    // if(savedPosition) {
    //   console.log(savedPosition)
    //   console.log('有')
    //   console.log(savedPosition)
    //   return savedPosition;
    // }else{
    //   return {x:0,y:0}
    // }
  },
});



// router.beforeEach((to, from, next)=>{
//   // console.log(to.matched.some(record => record.meta.requiresAuth));
//   next();
// })




export default router;



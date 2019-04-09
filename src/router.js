import Vue from "vue";
import Router from "vue-router";
import Layout from "./views/Layout.vue";

import layoutIndex from "./views/layout/index.vue";
import layoutMine from "./views/layout/mine.vue";
import layoutAbout from "./views/layout/about.vue";

import Notfind from "./views/Notfind.vue";
import Detail from "./views/Detail.vue";
import Loading from "./views/Loading.vue";
import register from "./views/register.vue";
import login from "./views/login.vue";

Vue.use(Router);


const baseLink = ""

 const router = new Router({
  mode: "hash", // history
  base: process.env.BASE_URL,
  routes: [
    { path:baseLink+'/',redirect:"/layout"},
    { path:baseLink+'/register',name:"register",component:register},
    { path:baseLink+'/login',name:"login",component:login},
    { path:baseLink+'/loading',name:"loading",component:Loading},
    {
      path: baseLink+"/layout",
      name: "",
      component: Layout,
      children:[
        {path:baseLink+'/',redirect:"index"},
        {name: 'index',path: 'index',component: layoutIndex, meta: { requiresAuth: true }},
        {name: 'mine',path: 'mine',component: layoutMine},
        {name: 'about',path: 'about',component: layoutAbout}
      ]
    },
    { path: baseLink+"/detail",name: "detail",component: Detail},
    { path: baseLink+"/not-find",name: "not-find",component: Notfind},
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



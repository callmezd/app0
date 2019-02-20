import Vue from "vue";
import Router from "vue-router";
import Layout from "./views/Layout.vue";

import layoutIndex from "./route-views/layout/index.vue";
import layoutMine from "./route-views/layout/mine.vue";
import layoutAbout from "./route-views/layout/about.vue";

import Notfind from "./views/Notfind.vue";
import Detail from "./views/Detail.vue";


Vue.use(Router);




export default new Router({
  // vue-router.esm.js？8c4f:16[Vue Router]命名路由“layout”具有默认子路由。导航到此命名路由（：to=“name:'layout'”）时，将不会呈现默认的子路由。删除此路由的名称，并将默认子路由的名称用于命名链接。
  mode: "history", // history
  base: process.env.BASE_URL,
  routes: [
    { path:'/',redirect:"/layout"},
    {
      path: "/layout",
      name: "",
      component: Layout,
      children:[
        {path:'/',redirect:"index"},
        {name: 'index',path: 'index',component: layoutIndex},
        {name: 'mine',path: 'mine',component: layoutMine},
        {name: 'about',path: 'about',component: layoutAbout}
      ]
    },
    { path: "/detail",name: "detail",component: Detail},
    { path: "/not-find",name: "not-find",component: Notfind},
    { path: "*",redirect: "/not-find"}
  ]
});



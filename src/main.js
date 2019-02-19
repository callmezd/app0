import Vue from "vue";
import App from "./App.vue";
// 路由
import router from "./router";
// rem 布局
import 'lib-flexible/flexible.js' ;
import './style/base.less';
//ajax
import axios from 'axios';
import VueAxios from 'vue-axios';
//滑动组件
import VueScroller from 'vue-scroller';


// CSS
import './style/icon/iconfont.css';
import './style/animate.css';
import 'swiper/dist/css/swiper.css';

// vuex
import store from './store/index.js';//引入store



var VueAwesomeSwiper = require('vue-awesome-swiper');

Vue.use(VueAwesomeSwiper);

Vue.use(VueScroller);

Vue.use(VueAxios,axios);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

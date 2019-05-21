import Vue from "vue";
import App from "./App.vue";
// 路由
import router from "./router";
// rem 布局
// import 'lib-flexible/flexible.js' ;
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
import store from './vuex/store.js';






import 'element-ui/lib/theme-chalk/display.css'
import './plugins/element.js'

var VueAwesomeSwiper = require('vue-awesome-swiper');

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper);

Vue.use(VueScroller);

Vue.use(VueAxios,axios);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");



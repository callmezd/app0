import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'lib-flexible/flexible.js' ;
import './style/base.less';
import './style/icon/iconfont.css';
import './style/animate.css';


import 'swiper/dist/css/swiper.css';

import VueScroller from 'vue-scroller'


var VueAwesomeSwiper = require('vue-awesome-swiper');

Vue.use(VueAwesomeSwiper);

Vue.use(VueScroller);

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

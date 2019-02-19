import Vue from "vue";
import Vuex from "vuex";
import banner from './data/banner.js';
import list from './data/list';
import test from './data/test';
Vue.use(Vuex);



export default new Vuex.Store({
  modules:{
    banner,
    list,
    test
  }
});

// this.$store.dispatch('hideFooter')



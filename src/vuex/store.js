import Vue from "vue";
import Vuex from "vuex";

import list from './mudules/list';
import data from './mudules/data';
import alertShow from './mudules/alert';

import * as actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  modules:{
    data,
    list,
    alertShow
  }
});




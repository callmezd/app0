import Vue from "vue";
import Vuex from "vuex";

import list from './mudules/list';
import data from './mudules/data';
import alert from './mudules/alert';
import user from './mudules/user';

import * as actions from './actions'








import { SHOWAlERT } from './mutation_types'
import { HIDEAELRT } from './mutation_types'


console.log(
  {SHOWAlERT}
);





Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  mutations:{
    [SHOWAlERT] (state,msg) {
      state.alert.alertMsg = msg
      state.alert.alertShow = true
    },
    [HIDEAELRT] (state) {
      state.alert.alertShow = false
    }
  },
  modules:{
    data,
    list,
    alert,user
  }
});





import Vuex from "../vuex/store.js";

    function alert(msg){
        Vuex.commit('alert/SHOWAlERT',msg);
    }
export default{
    alert
}
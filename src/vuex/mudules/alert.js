

let alertShow = 1111;

const state = {
    alertShow
};

const mutations = {
    SHOWAlERT(){
        state.alertShow = true;
    },
    HIDEAELRT(){
        state.alertShow = false;
    }
}


export default {
    namespaced: true,
    state,
    mutations
}
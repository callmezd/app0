

let alertShow = true;

let alertMsg = "默认消息";

const state = {
    alertShow,
    alertMsg
};


// const mutations = {
//     SHOWAlERT(MSG){
//         console.log(MSG)
//         console.log(2222)
//         state.alert = true;
//     },
//     HIDEAELRT(){
//         state.alert = false;
//     }
// }


export default {
    namespaced: true,
    state,
    // mutations
}
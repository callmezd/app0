
const user={"s":"s"};

const state = {
    user
};

const mutations = {
    update(state,user) {
        state.user = user;
    }
};

  

export default {
    namespaced: true,
    state,
    mutations
}
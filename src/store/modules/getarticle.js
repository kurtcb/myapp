import get from "../../api/getarticle";
const state = {
    content: ""
};
const mutations = {
    GET_CONTENT(state, data) {
        state.content = data;
    }
};
const actions = {
    async getContent({ commit, state }, params) {
        let res = await get.getarticle(params)
        commit("GET_CONTENT", res);
        return res
    }
};
export default {
    namespaced: true, 
    state,
    mutations,
    actions
};
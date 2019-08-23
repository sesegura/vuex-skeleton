import { INNER } from "../modules_enum";

const actions = {};
const getters = {};
const mutations = {};

const State = function() {
    return {
        clicks: 0
    };
};

export default {
    namespaced: true,
    name: INNER,
    actions,
    getters,
    mutations,
    state: new State()
};

import { INSIDE_MODULE } from "../modules_enum";

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
    name: INSIDE_MODULE,
    actions,
    getters,
    mutations,
    state: new State()
};

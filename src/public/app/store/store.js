import Vue from "vue";
import Vuex from "vuex";
import Inner from "./module/inner-module_store";
import { INNER } from "./modules_enum";

Vue.use(Vuex);

const actions = {};
const getters = {};
const mutations = {};
const State = function() {
    return {
        clicks: 0
    };
};

export default new Vuex.Store({
    actions,
    getters,
    mutations,
    state: new State(),
    modules: {
        [INNER]: Inner
    }
});

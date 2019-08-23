import Vue from "vue";
import Vuex from "vuex";
import InsideModule from "./module/inside-module_store";

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
        insideModule: InsideModule
    }
});

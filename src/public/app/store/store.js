import Vue from "vue";
import Vuex from "vuex";
import Inner from "./module/inner-module_store";
import { INNER } from "./modules_enum";
import { APP_CLICK } from "./actions_enum";
import { APP_CLICKS } from "./getters_enum";

Vue.use(Vuex);

const MUTATIONS = {
    CLICK: "click"
};

const actions = {
    [APP_CLICK]({ commit }) {
        commit(MUTATIONS.CLICK);
    }
};

const getters = {
    [APP_CLICKS](state) {
        return state.clicks;
    }
};

const mutations = {
    [MUTATIONS.CLICK](state) {
        state.clicks++;
    }
};

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

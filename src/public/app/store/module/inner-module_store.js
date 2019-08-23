import { INNER } from "../modules_enum";
import { INNER_CLICK } from "../actions_enum";
import { INNER_CLICKS } from "../getters_enum";

const MUTATIONS = {
    CLICK: "click"
};

const actions = {
    [INNER_CLICK]({ commit }) {
        commit(MUTATIONS.CLICK);
    }
};

const getters = {
    [INNER_CLICKS](state) {
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

export default {
    namespaced: true,
    name: INNER,
    actions,
    getters,
    mutations,
    state: new State()
};

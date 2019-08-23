<script>
import InnerModule from "./module/inner/inner-module_component";
import Store from "./store/store";
import { mapActions, mapGetters } from "vuex";
import { INNER } from "./store/modules_enum";
import { APP_CLICK, INNER_CLICK } from "./store/actions_enum";
import { APP_CLICKS } from "./store/getters_enum";

export default {
    name: "AppComponent",

    store: Store,

    computed: {
        ...mapGetters({
            appClicks: APP_CLICKS
        })
    },

    methods: {
        ...mapActions({
            appClick: APP_CLICK
        }),

        ...mapActions(INNER, {
            innerClick: INNER_CLICK
        })
    },

    components: {
        "inner-module": InnerModule
    }
};
</script>

<template>
    <div class="App">
        <div class="App__title">
            <p>This is the App component</p>
            <p>Amount of clicks on App: {{ appClicks }}</p>
        </div>
        <button type="button" v-on:click="appClick">
            Click App
        </button>
        <button type="button" v-on:click="innerClick">
            Click Inner Module
        </button>
        <inner-module class="App__inner"></inner-module>
    </div>
</template>

<style>
body {
    margin: 0;
}

.App {
    background: rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    height: 100vh;
    margin: 0;
    padding: 16px;
    width: 100%;
}

.App__inner {
    margin-top: 16px;
}
</style>

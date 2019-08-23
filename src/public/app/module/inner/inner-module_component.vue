<script>
/**
 * @file InnerModule
 * @module module/inner/inner-module_component
 */
import { mapActions, mapGetters } from "vuex";
import { INNER } from "../../store/modules_enum";
import { APP_CLICK, INNER_CLICK } from "../../store/actions_enum";
import { INNER_CLICKS } from "../../store/getters_enum";

export default {
    name: "InnerModule",

    computed: {
        ...mapGetters(INNER, {
            innerClicks: INNER_CLICKS
        })
    },

    methods: {
        ...mapActions({
            appClick: APP_CLICK
        }),

        ...mapActions(INNER, {
            innerClick: INNER_CLICK
        })
    }
};
</script>

<template>
    <div class="InnerModule">
        <div class="InnerModule__title">
            <p>This is the Inner Module</p>
            <p>Amount of clicks on Inner Module: {{ innerClicks }}</p>
        </div>
        <button type="button" v-on:click="appClick">
            Click App
        </button>
        <button type="button" v-on:click="innerClick">
            Click Inner Module
        </button>
    </div>
</template>

<style>
.InnerModule {
    background: rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    width: 100%;
    border-radius: 8px;
    padding: 16px;
}
</style>

import Vue from "vue";
import App from "./public/app/app_component.vue";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");

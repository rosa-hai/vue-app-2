import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusCircle, faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlusCircle, faPlus);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

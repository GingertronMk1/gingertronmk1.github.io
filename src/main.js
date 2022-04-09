/**
 * Bootstrap setup
 */

require("bootstrap");

/**
 * And some helpers
 */

require("./helpers");

/**
 * Vue setup
 */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

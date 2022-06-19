import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";

// need to exist in .env file
// i put here only for the challenge
export const apiKey = "10a06b62438ca5d322f7859e44a15aa5";

import "./index.css";

createApp(App).use(router).use(createPinia()).mount("#app");

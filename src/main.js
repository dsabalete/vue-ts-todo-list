import { createApp } from "vue";
import router from "./router";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./assets/css/index.css";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");

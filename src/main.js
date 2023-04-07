import { createApp } from "vue";
import "./styles/index.scss";
import App from "./App.vue";
import Vue3Lottie from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import "loconative-scroll/dist/loconative-scroll.min.css";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import "@splidejs/splide/dist/css/splide-core.min.css";
import "@splidejs/splide/dist/css/splide.min.css";

createApp(App).use(Vue3Lottie).mount("#app");

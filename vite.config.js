import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        host: true,
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
        @import "./src/styles/core/_variables.scss";
        @import "./src/styles/shared/_repeat.scss";
        @import "./src/styles/shared/_generic.scss";
        @import "./src/styles/utils/_mixins.scss";
        `,
            },
        },
    },
});

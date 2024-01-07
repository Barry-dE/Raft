import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // Set the base path to the root of your project
  resolve: {
    // alias: {
    //   "@": "./src",
    // },
    extensions: [".js", ".jsx", ".json", ".png", ".jpg", ".gif"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import './src/styles/abstract/_mixins.scss';
          @import './src/styles/abstract/_variables.scss';
          @import './src/styles/utils/description.scss';
          @import './src/styles/utils/titles.scss';
          @import './src/styles/utils/buttons.scss';
        `,
      },
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.png'],
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
          @import './src/styles/abstract/_mixins.scss';
          @import './src/styles/abstract/_variables.scss';
          @import './src/styles/shared/description.scss';
          @import './src/styles/shared/titles.scss';
          @import './src/styles/shared/buttons.scss';
                    @import './src/styles/utils/responsive.scss';
        `,
            },
        },
    },
});

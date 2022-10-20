// vite.config.js
import {resolve} from 'path'
import {defineConfig} from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, 'index.html'),
                product_page : resolve(__dirname, 'productPage.html'),
                about : resolve(__dirname, 'about.html')

            }
        }
    }
});
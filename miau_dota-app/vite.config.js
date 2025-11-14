import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/MiauTech/',
    build: {
        rollupOptions: {
            input: {
                MDmain: resolve(__dirname, 'index.html'),
                detailsPet: resolve(__dirname, 'pages/details-pet.html'),
                MJmain: resolve(__dirname, 'pages/miau-juda-ini.html')
            }
        }
    }
})
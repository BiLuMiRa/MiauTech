import { defineConfig } from 'vite'

export default defineConfig({
    base: '/Miau-dota/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
            }
        }
    }
})
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = {...process.env, ...loadEnv(mode, process.cwd())};
  
  return{
    base: env.VITE_BASE_URL,
    plugins: [
      vue()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        'vue' : "vue/dist/vue.esm-bundler.js"
      }
    }
  }
})

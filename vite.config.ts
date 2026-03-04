import { resolve } from 'path'
import { defineConfig } from 'vite'
import { dependencies, devDependencies } from './package.json'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MY-LIB',
      // the proper extensions will be added
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react/jsx-runtime', ...Object.keys(dependencies), ...Object.keys(devDependencies)],
    },
    sourcemap: true, //если не ватает памяти на билде то убрать
    target: 'esnext',
  },
})

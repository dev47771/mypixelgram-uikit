import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { defineConfig } from 'vite'
import pkg from './package.json' with { type: 'json' }
import tailwindcss from '@tailwindcss/vite'

// create __dirname for ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const { dependencies, devDependencies } = pkg

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      tailwindcss(),
      {
         name: 'add-use-client',
         generateBundle(_, bundle) {
            for (const file of Object.values(bundle)) {
               // Добавляем 'use client' только в JS файлы
               if (file.type === 'chunk' && file.fileName.endsWith('.js')) {
                  // Проверяем, есть ли уже директива
                  if (
                     !file.code.startsWith('"use client"') &&
                     !file.code.startsWith("'use client'")
                  ) {
                     file.code = '"use client";\n' + file.code
                  }
               }
            }
         },
      },
   ],
   resolve: {
      alias: {
         '@': resolve(__dirname, './src'),
      },
   },
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
         external: [
            'react/jsx-runtime',
            ...Object.keys(dependencies),
            ...Object.keys(devDependencies),
         ],
      },
      sourcemap: true, //если не ватает памяти на билде то убрать
      target: 'esnext',
   },
})

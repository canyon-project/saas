import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'
import AntdResolver from 'unplugin-auto-import-antd'
import Pages from 'vite-plugin-pages';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    AutoImport({
      imports: ['react'],
      dts: './src/auto-imports.d.ts',
      resolvers: [AntdResolver()]
    }),    Pages({
      exclude: ['**/helper/**'],
    }),],
  server: {
    port: 8000,
    host: '0.0.0.0',
    proxy: {
      '^/graphql|^/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
      },
    },
  },
})

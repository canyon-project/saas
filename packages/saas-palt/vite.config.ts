import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'
import AntdResolver from 'unplugin-auto-import-antd'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    AutoImport({
      dts: './src/auto-imports.d.ts',
      resolvers: [AntdResolver()]
    })],
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: true,
    },
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@domain': '/src/domain',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@routes': '/src/routes',
      '@services': '/src/services',
      '@styles': '/src/styles',
      '@utils': '/src/utils',
      '@stores': '/src/stores',
    },
  },
});

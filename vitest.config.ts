import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  // Configure Vitest (https://vitest.dev/config/)
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      '~~': path.resolve(__dirname, './src/index.ts'),
    },
  },
});

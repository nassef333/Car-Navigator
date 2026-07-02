import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'theme-config',
      configureServer(server) {
        server.middlewares.use('/theme.config.json', (_req, res) => {
          const config = readFileSync(resolve(__dirname, '../theme.config.json'), 'utf-8');
          res.setHeader('Content-Type', 'application/json');
          res.end(config);
        });
      },
    },
  ],
  server: {
    port: 5174,
  },
});

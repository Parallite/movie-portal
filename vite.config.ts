import { AliasOptions, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    resolve: {
        // Не понятно почему не работают алиасы Vite
        //alias: {
        //    '@': path.resolve(__dirname, './src'),
        //    '@assets': path.resolve(__dirname, './src/assets'),
        //    '@components': path.resolve(__dirname, './src/components'),
        //    '@hooks': path.resolve(__dirname, './src/hooks'),
        //    '@context': path.resolve(__dirname, './src/context')
        //} as AliasOptions,
    },
});

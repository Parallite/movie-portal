import { AliasOptions, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    resolve: {
        alias: {
            //'@/': path.resolve(__dirname, './src'),
            '@types': path.resolve(__dirname, './src/types.ts'),
            '@constants': path.resolve(__dirname, './src/constants.ts'),
            '@components': path.resolve(__dirname, './src/components'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@context': path.resolve(__dirname, './src/context'),
            '@layout': path.resolve(__dirname, './src/layout')
        } as AliasOptions
    }
});

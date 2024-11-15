import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AuthContextProvier } from '@context/AuthContext.tsx';

import { Layout } from '@layout/Layout';
import { HomePage } from '@pages/Homepage';
import { LoginPage } from '@pages/Login/';
import { MoviePage } from '@pages/Movie';
import { FavoritesPage } from '@pages/Favorites';
import { NotFoundPage } from '@pages/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'movie/:id',
                element: <MoviePage />
            },
            {
                path: 'favorites',
                element: <FavoritesPage />
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthContextProvier>
            <RouterProvider router={router} />
        </AuthContextProvier>
    </StrictMode>
);

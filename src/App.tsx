import './index.css';

import { lazy, ReactNode, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AuthContextProvier } from '@context/AuthContext.tsx';
import { Layout } from '@layout/Layout';
import { movieLoader } from '@pages/Movie/loader';

import { ErrorBoundary } from '@components/ErrorBoundary';
import { Spinner } from '@components/Spinner';

const HomePage = lazy(() => import('./pages/Home/HomePage'));
const LoginPage = lazy(() => import('./pages/Login/LoginPage'));
const MoviePage = lazy(() => import('./pages/Movie/MoviePage'));
const FavoritesPage = lazy(() => import('./pages/Favorites/FavoritesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage'));

export const lazyComponent = (component: ReactNode): ReactNode => {
    return (
        <Suspense fallback={<Spinner />}>
            {component}
        </Suspense>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: lazyComponent(<HomePage />),
                errorElement: <ErrorBoundary />
            },
            {
                path: 'login',
                element: lazyComponent(<LoginPage />),
                errorElement: <ErrorBoundary />
            },
            {
                path: 'movie/:id',
                element: lazyComponent(<MoviePage />),
                loader: movieLoader,
                errorElement: <ErrorBoundary />
            },
            {
                path: 'favorites',
                element: lazyComponent(<FavoritesPage />),
                errorElement: <ErrorBoundary />
            },
            {
                path: '*',
                element: lazyComponent(<NotFoundPage />),
                errorElement: <ErrorBoundary />
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

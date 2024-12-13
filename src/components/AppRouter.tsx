import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '@layout/AppLayout';
import { movieLoader } from '@pages/Movie/loader';

import { ErrorBoundary } from '@components/ErrorBoundary';
import { lazyComponent } from '@components/LazyComponent';

import { AuthLayout } from '@layout/AuthLayout';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const HomePage = lazy(() => import('../pages/Home/HomePage'));
const LoginPage = lazy(() => import('../pages/Login/LoginPage'));
const MoviePage = lazy(() => import('../pages/Movie/MoviePage'));
const FavoritesPage = lazy(() => import('../pages/Favorites/FavoritesPage'));
const ProfilePage = lazy(() => import('../pages/Profile/ProfilePage'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFoundPage'));

export const AppRouter = createBrowserRouter([
    {

        path: '/',
        element: <PrivateRoute>
            <AppLayout />
        </PrivateRoute>,
        children: [
            {
                index: true,
                element: lazyComponent(<HomePage />),
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
                path: 'profile',
                element: lazyComponent(<ProfilePage />),
                errorElement: <ErrorBoundary />
            },
            {
                path: '*',
                element: lazyComponent(<NotFoundPage />),
                errorElement: <ErrorBoundary />
            }
        ]
    },
    {
        path: '/auth',
        element:
            <PublicRoute>
                <AuthLayout />
            </PublicRoute>,
        children: [
            {
                path: 'login',
                element: lazyComponent(<LoginPage />),
                errorElement: <ErrorBoundary />
            },
            {
                path: 'register',
                element: lazyComponent(<LoginPage />),
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
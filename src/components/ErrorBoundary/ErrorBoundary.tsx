import { EmptyState } from '@components/EmptyState';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const ErrorBoundary = () => {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {

        if (error.status === 400) {
            return <EmptyState
                heading='Error 400 Bad Request'
                text='Our apologies for the incovenience. The requested you made couldn&apos;t be completed'
            />;
        }

        if (error.status === 401) {
            return <EmptyState
                heading='You aren&apos;t authorized to see this'
            />;
        }

        if (error.status === 404) {
            return <EmptyState
                heading='This page doesn&apos;t exist!'
            />;
        }

        if (error.status === 503) {
            return <EmptyState
                heading='Looks like our API is down'
            />;
        }

        if (error.status === 418) {
            return <EmptyState
                heading='🫖 I&apos;m a teapot'
            />;
        }
    }

    return <EmptyState
        heading='Something went wrong!'
    />;
};
import { ReactNode, Suspense } from 'react';
import { Spinner } from '@components/Spinner';

export const lazyComponent = (component: ReactNode): ReactNode => {
    return (
        <Suspense fallback={<Spinner />}>
            {component}
        </Suspense>
    );
};
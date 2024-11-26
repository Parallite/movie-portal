import { FC } from 'react';
import { useAuthContext } from '@hooks/useAuthContext';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
    children: JSX.Element;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
    const { currentUser } = useAuthContext();

    if (!currentUser?.isLogged) {
        return <Navigate to='/auth/login' replace />;
    }

    return children ? children : <Outlet />;
};
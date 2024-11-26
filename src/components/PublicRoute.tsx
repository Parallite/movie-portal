import { FC } from 'react';
import { useAuthContext } from '@hooks/useAuthContext';
import { Navigate, useLocation } from 'react-router-dom';

interface PublicRouteProps {
    children: JSX.Element;
}

export const PublicRoute: FC<PublicRouteProps> = ({ children }) => {
    const { currentUser } = useAuthContext();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    if (currentUser?.isLogged) {
        return <Navigate to={from} />;
    }

    return children;
};
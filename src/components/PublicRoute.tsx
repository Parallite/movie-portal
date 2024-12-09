import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectAuthUser } from 'store/user/selectors';

interface PublicRouteProps {
    children: JSX.Element;
}

export const PublicRoute: FC<PublicRouteProps> = ({ children }) => {
    const authUser = useSelector(selectAuthUser);
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    if (authUser?.isLogged) {
        return <Navigate to={from} />;
    }

    return children;
};
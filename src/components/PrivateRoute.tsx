import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthUser } from 'store/user/selectors';

interface PrivateRouteProps {
    children: JSX.Element;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
    const authUser = useSelector(selectAuthUser);

    if (!authUser?.isLogged) {
        return <Navigate to='/auth/login' replace />;
    }

    return children;
};
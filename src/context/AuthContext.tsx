import { createContext, ReactNode, useEffect, useState } from 'react';
import { IUser, TUsers } from '@types';

import useLocalStorage from '@hooks/useLocalStorage';
import { useLocation, useNavigate } from 'react-router-dom';

const DefaultAuthContextProps: AuthContextProps = {
    currentUser: null,
    handleLogin: () => null,
    handleLogout: () => null
};

interface AuthContextProps {
    currentUser: IUser | null,
    handleLogin: (value: string) => void,
    handleLogout: () => void,
}

interface AuthContextProviderProps {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextProps>(DefaultAuthContextProps);

export const AuthContextProvier = ({
    children
}: AuthContextProviderProps) => {
    const [storageData, setStorageData] = useLocalStorage<TUsers>('users', [] as TUsers);
    const [currentUser, setCurrentUser] = useState<IUser | null>(null);

    const navigate = useNavigate();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    const handleLogout = () => {
        if (currentUser) {
            const changedStorage = storageData.map(user => {
                return user.id === currentUser.id ? { ...user, isLogged: false } : user;
            });
            setStorageData(changedStorage);
            setCurrentUser(null);
            navigate('/', { replace: true });
        }
    };

    const handleLogin = (value: string) => {
        //Проверка пользователя со статусом Авторизован
        const user = storageData.find(user => user.isLogged);
        if (!user) {
            //Проверка существующего пользователя
            const existingUser = storageData.find(user => user.name === value);

            if (!existingUser) {
                const newUser = {
                    id: Math.floor(Math.random() * 100_000_000),
                    name: value,
                    isLogged: true
                };
                setStorageData([
                    ...storageData,
                    newUser
                ]);
                setCurrentUser(newUser);
            }

            if (existingUser && !user) {
                const changedStorage = storageData.map(user => {
                    return user.id === existingUser.id ? { ...user, isLogged: true } : user;
                });
                setStorageData(changedStorage);
                setCurrentUser({
                    ...existingUser,
                    isLogged: true
                });
            }
            navigate(from);
        }
    };

    useEffect(() => {
        if (!currentUser) {
            const user = storageData.find(user => user.isLogged);
            if (user) setCurrentUser(user);
        }
    }, [storageData]);

    return (
        <AuthContext.Provider value={{ currentUser, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
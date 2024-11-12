import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '@hooks/useLocalStorage';

export const AuthContext = createContext(null);

export const AuthContextProvier = ({
    children
}) => {
    const [storageData, setStorageData] = useLocalStorage('user', []);
    const [currentUser, setCurrentUser] = useState(null);

    const handleLogout = () => {
        const changedStorage = storageData.map(user => {
            return user.id === currentUser.id ? { ...user, isLogged: false } : user;
        });
        setStorageData(changedStorage);
        setCurrentUser(null);
    };

    const handleLogin = (value) => {
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
        if (existingUser && !existingUser.isLogged) {
            const changedStorage = storageData.map(user => {
                return user.id === existingUser.id ? { ...user, isLogged: true } : user;
            });
            setStorageData(changedStorage);
            setCurrentUser({
                ...existingUser,
                isLogged: true
            });
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
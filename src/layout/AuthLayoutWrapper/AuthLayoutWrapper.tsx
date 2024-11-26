import { AuthContextProvier } from '@context/AuthContext';
import { useOutlet } from 'react-router-dom';

export const AuthLayoutWrapper = () => {
    const outlet = useOutlet();

    return (
        <AuthContextProvier>{outlet}</AuthContextProvier>
    );
};
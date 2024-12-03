import { useAuthContext } from '@hooks/useAuthContext';

import { Heading } from '@components/Heading';
import { HeroForm } from '@components/HeroForm';

const LoginPage = () => {
    const { handleLogin } = useAuthContext();
    return (
        <>
            <Heading as={2}>
                Вход
            </Heading>
            <HeroForm
                inputPlaceholder="Ваше имя"
                inputName="login"
                buttonText="Войти в профиль"
                onSubmit={handleLogin}
                className={'login'} />
        </>
    );
};

export default LoginPage;
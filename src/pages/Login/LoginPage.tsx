import { Heading } from '@components/Heading';
import { HeroForm } from '@components/HeroForm';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store';
import { login } from 'store/user/userSlice';

const LoginPage = () => {
    const dispatch = useDispatch<AppDispatch>();

    const handleLogin = (value: string) => {
        dispatch(login(value));
    };
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
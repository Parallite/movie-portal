import styles from './App.module.css';

import { useAuthContext } from '@/hooks/useAuthContext';
import { movies } from '@/constants';

import { Header } from '@/components/Header';
import { Heading } from '@/components/Heading';
import { HeroForm } from '@/components/HeroForm';
import { MoviesList } from '@/components/MoviesList';
import { Paragraph } from '@/components/Paragraph';

function App() {
    const { handleLogin } = useAuthContext();
    return (
        <div className={`${styles.app} ${styles.container}`}>
            <Header />
            <div className={styles.hero}>
                <Heading as={6}>
                    Поиск
                </Heading>
                <Paragraph>
                    Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
                </Paragraph>
                <HeroForm
                    inputPlaceholder="Введите название"
                    inputName="search"
                    buttonText="Искать"
                    icon='/search.svg'
                    alt='иконка поиска'
                    onSubmit={() => { }}
                />
            </div>
            <MoviesList movies={movies} />
            <Heading as={2}>
                Вход
            </Heading>
            <HeroForm
                inputPlaceholder="Ваше имя"
                inputName="login"
                buttonText="Войти в профиль"
                onSubmit={handleLogin}
                className={'login'} />
        </div>
    );
}

export default App;

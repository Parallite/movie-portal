import styles from './App.module.css';

import { movies } from './constants';
import { useAuthContext } from '@hooks/useAuthContext';

import { Heading } from '@components/Heading';
import { Paragraph } from '@components/Paragraph';
import { Header } from '@components/Header';
import { HeroForm } from '@components/HeroForm';
import { MoviesList } from '@components/MoviesList';

function App() {
    const { handleLogin } = useAuthContext();
    return (
        <div className={`${styles.app} ${styles.container}`}>
            <Header />
            <div className={styles.hero}>
                <Heading as={1}>
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
                className={'login'}
            />
        </div>
    );
}

export default App;

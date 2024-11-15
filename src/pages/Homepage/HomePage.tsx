import styles from './Homepage.module.css';

import { Heading } from '@components/Heading';
import { HeroForm } from '@components/HeroForm';
import { MoviesList } from '@components/MoviesList';
import { Paragraph } from '@components/Paragraph';
import { movies } from '@constants';

export const HomePage = () => {

    const handleSubmitForm = () => {
        console.log('submit');
    };

    return (
        <div className={`${styles.app} ${styles.container}`}>
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
                    onSubmit={handleSubmitForm}
                />
            </div>
            <MoviesList movies={movies} />
        </div>
    );
};
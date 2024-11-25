import styles from './Homepage.module.css';

import { useState } from 'react';
import { $api } from 'axios/axios';
import { AxiosError } from 'axios';

import { ISearchResponse, TMovies } from '@types';

import { Heading } from '@components/Heading';
import { HeroForm } from '@components/HeroForm';
import { MoviesList } from '@components/MoviesList';
import { Paragraph } from '@components/Paragraph';
import { Spinner } from '@components/Spinner/Spinner';
import { EmptyState } from '@components/EmptyState';


const HomePage = () => {
    const [movies, setMovies] = useState<TMovies>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleSubmitForm = (value: string) => {
        getSearchedMovies(value);
    };

    const getSearchedMovies = async (name: string) => {
        try {
            setError('');
            setIsLoading(true);
            const { data } = await $api.get<ISearchResponse>(`/movie/search?page=1&limit=12&query=${name}`);
            if (data) {
                setMovies(data.docs);
            }
            setIsLoading(false);
        } catch (e) {
            if (e instanceof AxiosError) {
                setError(e.message);
            } else {
                console.log('Error fetching data:', e);
            }
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.app}>
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
                    alt='Иконка поиска'
                    onSubmit={handleSubmitForm}
                />
            </div>
            <div className={styles.content_wrapper}>
                {isLoading && <Spinner />}
                {error && <EmptyState heading='Упс... Что-то пошло не так!' text={error} />}
                {(movies && !isLoading && !error) && <MoviesList movies={movies} />}
            </div>
        </div>
    );
};

export default HomePage;
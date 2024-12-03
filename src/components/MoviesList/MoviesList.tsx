import styles from './MoviesList.module.css';

import { FC } from 'react';
import { TMovies } from '@types';

import { MovieCard } from '@components/MovieCard';
import { Link } from 'react-router-dom';
import { EmptyState } from '@components/EmptyState/EmptyState';

interface MovieListProps {
    movies: TMovies
}

export const MoviesList: FC<MovieListProps> = ({
    movies
}) => {
    if (movies.length === 0) {
        return <EmptyState
            heading='Упс... Ничего не найдено'
            text='Попробуйте изменить запрос или ввести более точное название фильма'
        />;
    }

    return (
        <>
            {
                movies && <div className={styles.movies_wrapper}>
                    {movies.map((movie) => (
                        <Link
                            to={`/movie/${movie.id}`}
                            key={movie.id}
                            className={styles.card_link}
                        >
                            <div className={styles.card_wrapper}>
                                <MovieCard movie={movie} />
                            </div>
                        </Link>
                    ))}
                </div>
            }
        </>
    );
};

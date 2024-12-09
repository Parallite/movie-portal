import styles from './FavoritesList.module.css';

import { FC } from 'react';
import { TFavoriteMovies } from '@types';

import { MovieCard } from '@components/MovieCard';
import { Link } from 'react-router-dom';
import { EmptyState } from '@components/EmptyState/EmptyState';

interface FavoritesListProps {
    movies: TFavoriteMovies,
    emptyText: string,
    emptyHeading: string
}

export const FavoritesList: FC<FavoritesListProps> = ({
    movies,
    emptyHeading,
    emptyText
}) => {
    if (movies.length === 0) {
        return <EmptyState
            heading={emptyHeading}
            text={emptyText}
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
                                <MovieCard
                                    id={movie.id}
                                    name={movie.name}
                                    rating={movie.rating}
                                    poster={movie.poster}
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            }
        </>
    );
};

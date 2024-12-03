import styles from './MovieCard.module.css';
import { IMovie } from '@types';

import { FC } from 'react';

import { ToFavoritesButton } from '@components/ToFavoritesButton';

interface MovieCardProps {
    movie: IMovie,
}

export const MovieCard: FC<MovieCardProps> = ({
    movie
}) => {

    return (
        <div className={styles.card}>
            <div className={styles.rating}>
                <img src="/star.svg" alt='Иконка рейтинга' />
                {movie.rating.imdb}
            </div>
            <div className={styles.picture_wrapper}>
                <img className={styles.picture} src={movie?.poster?.url || '/previews/no-image.png'} alt="Постер фильма" />
            </div>
            <div className={styles.card_body}>
                <h2 className={styles.title}>{movie.name || <span className={styles.no_title}>Title not found</span>}</h2>
                <ToFavoritesButton id={`${movie.id}`} />
            </div>
        </div>
    );
};

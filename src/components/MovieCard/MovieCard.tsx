import styles from './MovieCard.module.css';

import { FC } from 'react';

import { ToFavoritesButton } from '@components/ToFavoritesButton';

interface MovieCardProps {
    id: number,
    rating: number,
    poster: string,
    name: string,
}

export const MovieCard: FC<MovieCardProps> = ({
    id,
    rating,
    poster,
    name
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.rating}>
                <img src="/star.svg" alt='Иконка рейтинга' />
                {rating}
            </div>
            <div className={styles.picture_wrapper}>
                <img className={styles.picture} src={poster ?? '/previews/no-image.png'} alt="Постер фильма" />
            </div>
            <div className={styles.card_body}>
                <h2 className={styles.title}>{name || <span className={styles.no_title}>Title not found</span>}</h2>
                <ToFavoritesButton
                    movieId={id}
                    name={name}
                    rating={rating}
                    poster={poster}
                />
            </div>
        </div>
    );
};

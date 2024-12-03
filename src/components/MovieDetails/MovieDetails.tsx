import styles from './MovieDetails.module.css';
import { FC } from 'react';

import { IMovieDetails } from '@types';
import { dateFormatter } from 'utils/dateFormatter';
import { ToFavoritesButton } from '@components/ToFavoritesButton';
import { genresFormatter } from 'utils/genresFormatter';

interface MovieDetailsProps {
    movie: IMovieDetails
}

export const MovieDetails: FC<MovieDetailsProps> = ({
    movie
}) => {
    return (
        <>
            <div className={styles.details_header}>
                <h1>Поиск фильмов</h1>
                <h2>{movie.name || <span className={styles.no_title}>Title not found</span>}</h2>
            </div>
            <div className={styles.details_body}>
                <img src={movie.poster.url || '/previews/no-image.png'} alt="Картинка обложки фильма" />
                <div className={styles.details_body_info}>
                    <p className={styles.info_description}>{movie.description}</p>
                    <div className={styles.info_rating_box}>
                        <div className={styles.info_rating}>
                            <img src="/star.svg" alt="Иконка рейтинга" />
                            {movie.rating.imdb}
                        </div>
                        <ToFavoritesButton id={`${movie.id}`} />
                    </div>
                    <div className={styles.info_box}>
                        <h3>Тип</h3>
                        <p>{movie.type}</p>
                    </div>
                    <div className={styles.info_box}>
                        <h3>Дата выхода</h3>
                        <p>{dateFormatter(movie.premiere.world)}</p>
                    </div>
                    <div className={styles.info_box}>
                        <h3>Длительность</h3>
                        <p>{movie.movieLength} мин</p>
                    </div>
                    <div className={styles.info_box}>
                        <h3>Жанр</h3>
                        <p>{genresFormatter(movie.genres)}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

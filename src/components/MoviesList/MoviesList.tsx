import styles from './MoviesList.module.css';

import { FC } from 'react';
import { CardList } from '@/types';

import { MovieCard } from '@/components/MovieCard';

interface MovieListProps {
    movies: CardList
}

export const MoviesList: FC<MovieListProps> = ({
    movies
}) => {

    if (movies.length === 0) {
        return <p className={styles.empty}>По результатам поиска ничего не найдено</p>;
    }

    return (
        <div className={styles.wrapper}>
            {movies.map((card) => (
                <div key={card.id} className={styles.cardBox}>
                    <MovieCard card={card} />
                </div>
            ))}
        </div>
    );
};

import { Card } from 'types';
import styles from './MovieCard.module.css';

import { FC } from 'react';


interface MovieCardProps {
    card: Card,
}

export const MovieCard: FC<MovieCardProps> = ({
    card
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.rating}>
                <img src="/star.svg" alt='Иконка рейтинга' />
                {card.rating}
            </div>
            <img className={styles.picture} src={card.picture} alt="Постер фильма" />
            <div className={styles.card_body}>
                <h2 className={styles.title}>{card.title}</h2>
                <button className={styles.button}>
                    {
                        card.isFavorite ? <>
                            <img src="/like-out.svg" alt="Кнопка удаления из избранного" />
                            <span className={styles.active}>В избранном</span>
                        </> : <>
                            <img src="/like-to.svg" alt="Кнопка добавления в избранное" />
                            <span className={styles.inactive}>В избранноe</span>
                        </>
                    }
                </button>
            </div>
        </div>
    );
};

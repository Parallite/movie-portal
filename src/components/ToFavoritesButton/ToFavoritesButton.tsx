import { useDispatch, useSelector } from 'react-redux';
import styles from './ToFavoritesButton.module.css';
import { ButtonHTMLAttributes, FC } from 'react';
import { AppDispatch } from 'store';
import { toggleFavorites } from 'store/favorites/favoritesSlice';
import { selectFavorites } from 'store/favorites/selectors';

interface ToFavoritesButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    movieId: number,
    rating: number,
    poster: string,
    name: string,
}

export const ToFavoritesButton: FC<ToFavoritesButtonProps> = ({
    movieId,
    name,
    poster,
    rating,
    ...props
}) => {
    const favorites = useSelector(selectFavorites);
    const dispatch = useDispatch<AppDispatch>();

    const toogleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.nativeEvent.preventDefault();
        dispatch(toggleFavorites({
            id: movieId,
            name,
            poster,
            rating
        }));
    };

    return (
        <button
            id={`${movieId}`}
            onClick={(e) => toogleFavorite(e)}
            className={styles.button}
            {...props}>
            {
                favorites
                    .find(movie => movie.id === movieId) ?
                    <>
                        <img className={styles.button_icon} src="/like-out.svg" alt="Кнопка удаления из избранного" />
                        <span className={styles.active}>В избранном</span>
                    </> : <>
                        <img className={styles.button_icon} src="/like-to.svg" alt="Кнопка добавления в избранное" />
                        <span className={styles.inactive}>В избранноe</span>
                    </>
            }
        </button>
    );
};
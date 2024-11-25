import styles from './ToFavoritesButton.module.css';
import { ButtonHTMLAttributes, FC, useState } from 'react';

interface ToFavoritesButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    id: string
}

export const ToFavoritesButton: FC<ToFavoritesButtonProps> = ({
    id,
    ...props
}) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    const toogleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.nativeEvent.preventDefault();
        setIsFavorite(prevState => prevState = !prevState);
    };

    return (
        <button
            id={id}
            onClick={(e) => toogleFavorite(e)}
            className={styles.button}
            {...props}>
            {
                isFavorite ? <>
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
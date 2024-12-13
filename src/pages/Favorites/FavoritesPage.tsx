import { FavoritesList } from '@components/FavoritesList';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'store/favorites/selectors';

const FavoritesPage = () => {
    const movies = useSelector(selectFavorites);
    return (
        <FavoritesList
            movies={movies}
            emptyHeading={'Список избранных фильмов пуст'}
            emptyText={'Попробуйте добавить фильм в избранное'}
        />
    );
};

export default FavoritesPage;
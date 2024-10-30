import './MoviesList.css';
import { MovieCard } from '@components/MovieCard';

export const MoviesList = ({
    movies
}) => {

    if (movies.length === 0) {
        return <p className='empty-movieList'>По результатам поиска ничего не найдено</p>;
    }

    return (
        <div className='movies'>
            {movies.map((card) => (
                <div key={card.id} className='movies__card-wrapper'>
                    <MovieCard card={card} />
                </div>
            ))}
        </div>
    );
};

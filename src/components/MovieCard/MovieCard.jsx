import './MovieCard.css';

export const MovieCard = ({
    card
}) => {
    return (
        <div className='card'>
            <div className='card__rating'>
                <img src="/star.svg" alt="Иконка рейтинга" />
                {card.rating}
            </div>
            <img className='card__picture' src={card.picture} alt="Постер фильма" />
            <div className='card__content'>
                <h2 className='card__content-title'>{card.title}</h2>
                <button className='card__content-button'>
                    {
                        card.isFavorite ? <>
                            <img src="/like-out.svg" alt="Кнопка удаления из избранного" />
                            <span className='card__content-button_active'>В избранном</span>
                        </> : <>
                            <img src="/like-to.svg" alt="Кнопка добавления в избранное" />
                            <span className='card__content-button_inactive'>В избранноe</span>
                        </>
                    }
                </button>
            </div>
        </div>
    );
};

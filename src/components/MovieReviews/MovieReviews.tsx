import styles from './MovieReviews.module.css';
import { FC } from 'react';
import { TReviews } from '@types';

import { dateFormatter } from 'utils/dateFormatter';

import { EmptyState } from '@components/EmptyState';

interface MovieReviewsProps {
    reviews: TReviews
}

export const MovieReviews: FC<MovieReviewsProps> = ({
    reviews
}) => {
    //Позже добавлю пагинацию списка отзывов
    return (
        <div className={styles.reviews_wrapper}>
            <h3 className={styles.reviews_heading}>Отзывы</h3>
            <div className={styles.review_box}>
                {
                    reviews.length ? <>
                        <div className={styles.review_details}>
                            <h4 className={styles.review_heading}>{reviews[0].title}</h4>
                            <div className={styles.review_date}>{dateFormatter(reviews[0].createdAt)}</div>
                        </div>
                        <p className={styles.review_text}>{reviews[0].review}</p>
                    </> : <>
                        <EmptyState heading={'Отзывы пользователей отсутствуют'} />
                    </>
                }
            </div>
        </div>
    );
};

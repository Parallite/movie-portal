import styles from './MoviePage.module.css';

import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

import { IMovieDetails, IReviewsResponse } from '@types';

import { Spinner } from '@components/Spinner';
import { MovieDetails } from '@components/MovieDetails';
import { MovieReviews } from '@components/MovieReviews';

interface MovieLoaderData {
    movie: IMovieDetails,
    reviews: IReviewsResponse
}

const MoviePage = () => {
    const { movie, reviews } = useLoaderData() as MovieLoaderData;
    return (
        <div className={styles.wrapper}>
            <Suspense fallback={<Spinner />}>
                <Await resolve={Promise.all([movie, reviews])
                    .then(data => {
                        const [movie, reviews] = data;
                        return { movie, reviews };
                    })}>
                    {
                        ({ movie, reviews }: MovieLoaderData) => (
                            <>
                                <MovieDetails movie={movie} />
                                <MovieReviews reviews={reviews.docs} />
                            </>
                        )
                    }
                </Await>
            </Suspense>
        </div>
    );
};

export default MoviePage;

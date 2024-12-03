import { $api } from 'axios/axios';
import { defer, Params } from 'react-router-dom';
import { IMovieDetails, ReviewsResponse } from '@types';

export const movieLoader = ({ params }: { params: Params }) => {
    return defer({
        movie: $api.get<IMovieDetails>(`/movie/${params.id}`).then(promisedData => promisedData.data),
        reviews: $api.get<ReviewsResponse>(`review?page=1&limit=3&movieId=${params.id}`).then(promisedData => promisedData.data)
    });
};
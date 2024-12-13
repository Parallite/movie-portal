import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFavoriteMovie, TFavoriteMovies } from '@types';
import { loadState } from 'store/storage/storage';

interface FavoritesState {
    movies: TFavoriteMovies
}

const initialState: FavoritesState = {
    movies: loadState('favorites') ?? []
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorites: (state, action: PayloadAction<IFavoriteMovie>) => {
            const existingMovie = state.movies.find(movie => movie.id === action.payload.id);
            if (existingMovie) {
                state.movies = state.movies.filter(movie => movie.id !== action.payload.id);
                return;
            }
            state.movies.push(action.payload);
        }
    }
});

export const { toggleFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import { saveState } from './storage/storage';

import favoritesSlice from './favorites/favoritesSlice';
import userSlice from './user/userSlice';

export const store = configureStore({
    reducer: {
        favorites: favoritesSlice,
        user: userSlice
    }
});

store.subscribe(() => {
    saveState(store.getState().favorites.movies, 'favorites');
});

store.subscribe(() => {
    saveState(store.getState().user.authUser, 'user');
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
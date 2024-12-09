import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@types';
import { loadState } from 'store/storage/storage';

interface UserState {
    authUser: IUser | null
}

const initialState: UserState = {
    authUser: loadState('user') ?? null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            if (!state.authUser) {
                state.authUser = {
                    id: Number(new Date()),
                    name: action.payload,
                    isLogged: true
                };
            }
        },
        logout: (state) => {
            state.authUser = null;
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
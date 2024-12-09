import { RootState } from 'store';

export const selectAuthUser = (state: RootState) => state.user.authUser;
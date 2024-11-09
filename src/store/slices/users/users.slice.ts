import { createSlice } from '@reduxjs/toolkit';
import ESliceNames from '../../store.types';
import { storageUsersDefaultState } from './users.types';

const usersSlice = createSlice({
  name: ESliceNames.USER_SLICE_NAME,
  initialState: storageUsersDefaultState,
  reducers: {
    setUser: (state, action: { payload: boolean }) => ({
      ...state,
      isAuth: action.payload,
    }),
  },
});

export const { setUser } = usersSlice.actions;

export default usersSlice.reducer;

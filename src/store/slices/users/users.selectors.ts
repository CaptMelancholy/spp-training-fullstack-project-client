import { RootState } from '../..';
import ESliceNames from '../../store.types';

export const usersSelector = (state: RootState) => state[ESliceNames.USER_SLICE_NAME].isAuth;

import { RootState } from '../..';
import ESliceNames from '../../store.types';

export const tasksSelector = (state: RootState) => state[ESliceNames.TASKS_SLICE_NAME].tasks;

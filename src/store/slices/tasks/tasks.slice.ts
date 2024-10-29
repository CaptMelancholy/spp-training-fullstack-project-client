import { ITask } from './../../../utils/Task/Task.types';
import { createSlice } from '@reduxjs/toolkit';
import ESliceNames from '../../store.types';
import { storageTasksDefaultState } from './tasks.types';

const tasksSlice = createSlice({
  name: ESliceNames.TASKS_SLICE_NAME,
  initialState: storageTasksDefaultState,
  reducers: {
    setTasks: (state, action: { payload: Array<ITask>}) => ({
        ...state,
        tasks: action.payload,
    }),
    pushTask: (state, action: { payload: ITask }) => {
      state.tasks.push(action.payload);
    },
    popTask: (state, action: { payload: ITask }) => ({
      ...state,
      tasks: state.tasks.filter(({ id }) => id !== action.payload.id),
    }),
    editTask: (state, action: { payload: ITask }) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task,
      );
    },
  },
});

export const { setTasks, pushTask, popTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;

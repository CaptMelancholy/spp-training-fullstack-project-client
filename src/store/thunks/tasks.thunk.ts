import { RootState } from '..';
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../API/api';
import {
  editTask,
  popTask,
  pushTask,
  setTasks,
} from '../slices/tasks/tasks.slice';
import { ITask } from '../../utils/Task/Task.types';

export const getTasks = createAsyncThunk<void, void, { state: RootState }>(
  'tasks/get',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.get(`tasks`);
      console.log(response.data);
      dispatch(setTasks(response.data));
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

export const postTask = createAsyncThunk<void, { task: ITask }>(
  'tasks/post',
  async ({ task }, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.post(`tasks`, task);
      dispatch(pushTask(response.data));
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

export const putTask = createAsyncThunk<void, { task: ITask; file?: File }>(
  'tasks/put',
  async ({ task, file }, { dispatch, rejectWithValue }) => {
    try {
      if (file) {
        const response = await api.put(`tasks/${task.id}`, {task, file});
        dispatch(editTask(response.data));
      } else {
        const response = await api.put(`tasks/${task.id}`, task);
        dispatch(editTask(response.data));
      }
      
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

export const deleteTask = createAsyncThunk<void, { task: ITask }>(
  'tasks/delete',
  async ({ task }, { dispatch, rejectWithValue }) => {
    try {
      await api.delete(`tasks/${task.id}`);
      dispatch(popTask(task));
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

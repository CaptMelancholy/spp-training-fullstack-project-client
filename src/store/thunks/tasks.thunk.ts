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
import { ADD_TASK, DELETE_TASK, GET_TASKS, UPDATE_TASK } from '../../API/graphql';
import { client } from '../../API/client';

export const getTasks = createAsyncThunk<void, void, { state: RootState }>(
  'tasks/get',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await client.query({
        query: GET_TASKS,
      });
      console.log(data);
      console.log('Приняли');
      dispatch(setTasks(data.getTasks));
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

export const postTask = createAsyncThunk<void, { task: ITask }>(
  'tasks/post',
  async ({ task }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await client.mutate({
        mutation: ADD_TASK,
        variables: { task },
      });
      console.log(data.addTask);
      const newTask : ITask = {
        id: data.addTask.id,
        title: data.addTask.title,
        deadline: data.addTask.deadline,
        status: data.addTask.status
      }
      dispatch(pushTask(newTask));
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
        const response = await api.put(`tasks/${task.id}`, { task, file });
        dispatch(editTask(response.data));
      } else {
        const { data } = await client.mutate({
          mutation: UPDATE_TASK,
          variables: { id: task.id, task: task },
        });
        console.log(data.updateTask);
        dispatch(editTask(data.updateTask));
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
      const { data } = await client.mutate({
        mutation: DELETE_TASK,
        variables: { id: task.id },
      });
      dispatch(popTask(data.deleteTask));
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

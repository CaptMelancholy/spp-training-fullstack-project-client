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
import { getSocket } from '../../API/socket';

export const getTasks = createAsyncThunk<void, void, { state: RootState }>(
  'tasks/get',
  async (_, { dispatch, rejectWithValue }) => {
    const socket = getSocket();
    if (socket) {
      try {
        socket.emit('getTasks');

        socket.on('tasksData', (tasks: Array<ITask>) => {
          dispatch(setTasks(tasks));
        });
      } catch (e) {
        rejectWithValue(e);
      }
    }
  },
);

export const postTask = createAsyncThunk<void, { task: ITask }>(
  'tasks/post',
  async ({ task }, { dispatch, rejectWithValue }) => {
    const socket = getSocket();
    if (socket) {
      try {
        socket.emit('addTask', task);

        socket.on('taskAdded', (newTask: ITask) => {
          dispatch(pushTask(newTask));
        });
      } catch (e) {
        rejectWithValue(e);
      }
    }
  },
);

export const putTask = createAsyncThunk<void, { task: ITask; file?: File }>(
  'tasks/put',
  async ({ task, file }, { dispatch, rejectWithValue }) => {
    const socket = getSocket();
    if (socket) {
      try {
        if (file) {
          const response = await api.put(`tasks/${task.id}`, { task, file });
          dispatch(editTask(response.data));
        } else {
          socket.emit('updateTask', task);

          socket.on('taskUpdated', (updatedTask: ITask) => {
            dispatch(editTask(updatedTask));
          });
        }
      } catch (e) {
        rejectWithValue(e);
      }
    }
  },
);

export const deleteTask = createAsyncThunk<void, { task: ITask }>(
  'tasks/delete',
  async ({ task }, { dispatch, rejectWithValue }) => {
    const socket = getSocket();
    if (socket) {
      try {
        socket.emit('deleteTask', task.id);

        socket.on('taskDeleted', (deletedTask: ITask) => {
          dispatch(popTask(deletedTask));
        });
      } catch (e) {
        rejectWithValue(e);
      }
    }
  },
);

import {
  combineReducers,
  configureStore,
  ThunkDispatch,
  AnyAction,
} from '@reduxjs/toolkit';
import ESliceNames from './store.types';
import { useDispatch } from 'react-redux';
import { listenerMiddleware } from './middleware';
import tasksReducer from './slices/tasks/tasks.slice';

const rootReducer = combineReducers({
  [ESliceNames.TASKS_SLICE_NAME]: tasksReducer,
  // [ESliceNames.USER_SLICE_NAME]: userReducer,
});

const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        [listenerMiddleware.middleware],
    ),
});

const store = setupStore();

export default store;

// annotation of all our reducers
export type RootState = ReturnType<typeof rootReducer>;
// annotation of function of creating stote
export type AppStore = ReturnType<typeof setupStore>;
// annotation of dispatch
export type AppDispatch = AppStore['dispatch'];
// annotation of actions
export const useAppDispatch = () => useDispatch<AppDispatch>();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

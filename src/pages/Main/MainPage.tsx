/* eslint-disable react-hooks/exhaustive-deps */
import PageTemplate from '../PagesTemplate/Template';
import TaskHeader from '../../components/TaskHeader/TaskHeader';
import TaskCardList from '../../components/TaskCardList/TaskCardList';
import { TaskFilterProvider } from '../../context/taskFilterContext';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelector } from '../../store/slices/tasks/tasks.selectors';
import { PrivateRoute } from '../../components/Routes/PriveteRoute';
import { AppDispatch } from '../../store';
import { usersSelector } from '../../store/slices/users/users.selectors';
import { useEffect } from 'react';
import { getTasks } from '../../store/thunks/tasks.thunk';

export default function MainPage() {
  const tasks = useSelector(tasksSelector);
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(usersSelector);
  useEffect(() => {
    const getOurTasks = async () => {
      dispatch(getTasks());
    };
    getOurTasks();
  }, [tasks.length]);
  useEffect(() => {
    const getOurTasks = async () => {
      dispatch(getTasks());
    };
    getOurTasks();
  }, [user]);
  return (
    <PrivateRoute>
      <PageTemplate title='TO-DO LIST'>
        <TaskFilterProvider>
          <TaskHeader />
          <TaskCardList tasks={tasks} />
        </TaskFilterProvider>
      </PageTemplate>
    </PrivateRoute>
  );
}

import PageTemplate from '../PagesTemplate/Template';
import TaskHeader from '../../components/TaskHeader/TaskHeader';
import TaskCardList from '../../components/TaskCardList/TaskCardList';
import { TaskFilterProvider } from '../../context/taskFilterContext';
import { useSelector } from 'react-redux';
import { tasksSelector } from '../../store/slices/tasks/tasks.selectors';

export default function MainPage() {
    const tasks = useSelector(tasksSelector);
  return (
    <PageTemplate title='TO-DO LIST'>
      <TaskFilterProvider>
        <TaskHeader />
        <TaskCardList tasks={tasks} />
      </TaskFilterProvider>
    </PageTemplate>
  );
}

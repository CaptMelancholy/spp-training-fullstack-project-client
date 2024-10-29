import { useTaskFilter } from '../../context/taskFilterHooks';
import { ITask } from '../../utils/Task/Task.types';
import TaskCard from '../TaskCard/TaskCard';
import * as S from './TaskCardList.styles';

interface IProps {
  tasks: Array<ITask>;
}

export default function TaskCardList({ tasks }: IProps) {
  const { search, filter } = useTaskFilter();
  const filteredTasks = tasks.filter((task) => {
    const matchesSearchTerm = task.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus = filter ? task.status === filter : true;

    return matchesSearchTerm && matchesStatus;
  });
  return (
    <S.TaskCardListContainer>
      {filteredTasks.length ? (
        filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            status={task.status}
            deadline={task.deadline}
          />
        ))
      ) : (
        <S.EmptyData>Nothing here...?</S.EmptyData>
      )}
    </S.TaskCardListContainer>
  );
}

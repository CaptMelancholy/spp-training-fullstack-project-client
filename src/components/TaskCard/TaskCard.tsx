import { useContext, useEffect, useState } from 'react';
import { EStatuses, ITask } from '../../utils/Task/Task.types';
import * as S from './TaskCard.styles';
import { FaCalendarDays, FaPen, FaRegTrashCan } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteTask, putTask } from '../../store/thunks/tasks.thunk';
import { AppDispatch } from '../../store';
import ScreenContext from '../../context/screenContext';
import ModalEdit from '../Modal/ModalEdit/ModalEdit';

export default function TaskCard({ id, title, deadline, status }: ITask) {
  const [check, setCheck] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const [showModal, setShowModal] = useState(false);
  const { setScreen } = useContext(ScreenContext);
  useEffect(() => {
    if (status === EStatuses.Complete) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, []);

  const handleCheckClick = () => {
    const postThisTask = async (task: ITask) => {
      dispatch(putTask({ task }));
    };
    const todayDate = new Date();
    const currentDate = new Date(deadline);
    todayDate.setHours(0, 0, 0, 0);
    const newStatus = !check
      ? EStatuses.Complete
      : todayDate >= currentDate
      ? EStatuses.Deadline
      : EStatuses.InProgress;

    const newTask: ITask = {
      id,
      title,
      deadline,
      status: newStatus,
    };
    postThisTask(newTask);
    setCheck(!check);
  };

  const handleEditClick = () => {
    setShowModal(true);
    setScreen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleDeleteClick = () => {
    const deleteThisTask = async (task: ITask) => {
      dispatch(deleteTask({ task }));
    };
    const task: ITask = {
      id,
      title,
      deadline,
      status,
    };
    deleteThisTask(task);
  };

  return (
    <>
      <ModalEdit
        showModal={showModal}
        setShowModal={setShowModal}
        task={{ id, title, deadline, status }}
      />
      <S.TaskCardContainer>
        <S.TaskCardInfoField>
          <S.TaskCardTitleContainer>
            <S.TaskCardTitle
              type='checkbox'
              checked={check}
              id={`card-title-${id}`}
            />
            <S.TaskCardTitleLabel
              htmlFor={`card-title-${id}`}
              $status={status}
              onClick={handleCheckClick}
            >
              {title}
            </S.TaskCardTitleLabel>
          </S.TaskCardTitleContainer>
          <S.TaskCardTags>
            <S.TaskCardTagContainer>
              <FaCalendarDays />
              <S.TaskCardLabel>{deadline}</S.TaskCardLabel>
            </S.TaskCardTagContainer>
            <S.TaskCardTagContainer>
              <S.TaskCardTagLogo $status={status} />
              <S.TaskCardLabel>{status}</S.TaskCardLabel>
            </S.TaskCardTagContainer>
          </S.TaskCardTags>
        </S.TaskCardInfoField>
        <S.TaskCardOptionsContainer>
          <S.TaskCardOptionsButton
            $type={S.EIconButtonType.Edit}
            onClick={handleEditClick}
          >
            <FaPen />
          </S.TaskCardOptionsButton>
          <S.TaskCardOptionsButton
            $type={S.EIconButtonType.Delete}
            onClick={handleDeleteClick}
          >
            <FaRegTrashCan />
          </S.TaskCardOptionsButton>
        </S.TaskCardOptionsContainer>
      </S.TaskCardContainer>
    </>
  );
}

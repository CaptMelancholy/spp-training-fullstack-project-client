import { useContext, useEffect, useState } from 'react';
import { EStatuses, ITask } from '../../utils/Task/Task.types';
import * as S from './TaskCard.styles';
import { FaCalendarDays, FaPen, FaRegTrashCan } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../store/thunks/tasks.thunk';
import { AppDispatch } from '../../store';
import ScreenContext from '../../context/screenContext';

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
      {/* MODAL */}
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
            $type={S.EButtonType.Edit}
            onClick={handleEditClick}
          >
            <FaPen />
          </S.TaskCardOptionsButton>
          <S.TaskCardOptionsButton
            $type={S.EButtonType.Delete}
            onClick={handleDeleteClick}
          >
            <FaRegTrashCan />
          </S.TaskCardOptionsButton>
        </S.TaskCardOptionsContainer>
      </S.TaskCardContainer>
    </>
  );
}

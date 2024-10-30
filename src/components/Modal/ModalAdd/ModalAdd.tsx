import * as C from '../../../styles/components';
import * as S from './ModalAdd.styles';
import { EStatuses, ITask } from '../../../utils/Task/Task.types';
import Modal from '../Modal';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import { useForm } from 'react-hook-form';
import { postTask } from '../../../store/thunks/tasks.thunk';
import { useContext } from 'react';
import ScreenContext from '../../../context/screenContext';

interface IProps {
  showModal: boolean;
  setShowModal: (flag: boolean) => void;
}

interface ITaskInput {
  title: string;
  data: string;
}

export default function ModalAdd({ showModal, setShowModal }: IProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { setScreen } = useContext(ScreenContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ITaskInput>();

  const submitOptions = {
    title: {
      required: 'Title is required',
      validate: {
        trapSpacesForRequiredFields: (v: string) =>
          !!v.trim() || 'White spaces not acceptable',
      },
    },
    data: {
      validate: {
        if_enter_not_empty: (v: string) => {
          if (v !== undefined && v === '') {
            return 'You must enter the date';
          }
        },
      },
    },
  };

  const handleSubmitAddTask = (data: ITaskInput) => {
    const postThisTask = async (task: ITask) => {
      dispatch(postTask({ task }));
    };
    const todayDate = new Date();
    const currentDate = new Date(data.data);
    todayDate.setHours(0, 0, 0, 0);
    const status =
      todayDate >= currentDate ? EStatuses.Deadline : EStatuses.InProgress;

    const newTask: ITask = {
      id: 0,
      title: data.title,
      deadline: data.data,
      status,
    };
    postThisTask(newTask);
    document.body.style.overflow = 'scroll';
    setScreen(false);
    setShowModal(false);
    reset();
  };

  return (
    <Modal
      title='New Note'
      showModal={showModal}
      setShowModal={setShowModal}
      $onSubmit={handleSubmit(handleSubmitAddTask)}
    >
      <S.ModalForm>
      <C.Text $weight={400} $size={12}>Title</C.Text>
        <C.Input
          type='text'
          placeholder='Enter title of a task'
          {...register('title', submitOptions.title)}
        />
        {errors.title && <C.Error>{errors.title.message}</C.Error>}
        <C.Text $weight={400} $size={12}>Deadline Time</C.Text>
        <C.Input type='date' {...register('data', submitOptions.data)} />
        {errors.data && <C.Error>{errors.data.message}</C.Error>}
      </S.ModalForm>
    </Modal>
  );
}

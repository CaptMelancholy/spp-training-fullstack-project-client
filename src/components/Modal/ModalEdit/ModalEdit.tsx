import * as C from '../../../styles/components';
import * as S from './ModalEdit.styles';
import { EStatuses, ITask } from '../../../utils/Task/Task.types';
import Modal from '../Modal';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import { useForm } from 'react-hook-form';
import {  putTask } from '../../../store/thunks/tasks.thunk';
import { useContext } from 'react';
import ScreenContext from '../../../context/screenContext';

interface IProps {
  showModal: boolean;
  setShowModal: (flag: boolean) => void;
  task: ITask;
}

interface ITaskInput {
  title: string;
  data: string;
  file?: File;
}

export default function ModalEdit({ showModal, setShowModal, task }: IProps) {
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
    console.log(data);
    const putThisTask = async (task: ITask) => {
      dispatch(putTask({ task }));
    };
    const todayDate = new Date();
    const currentDate = new Date(data.data);
    todayDate.setHours(0, 0, 0, 0);
    const status =
      todayDate >= currentDate ? EStatuses.Deadline : EStatuses.InProgress;

    const newTask: ITask = {
      id: task.id,
      title: data.title,
      deadline: data.data,
      status,
      files: task.files,
    };
    putThisTask(newTask);
    document.body.style.overflow = 'scroll';
    setScreen(false);
    setShowModal(false);
    reset();
  };

  return (
    <Modal
      title='Edit Note'
      showModal={showModal}
      setShowModal={setShowModal}
      $onSubmit={handleSubmit(handleSubmitAddTask)}
    >
      <S.ModalForm>
      <C.Text $weight={400} $size={12}>Title</C.Text>
        <C.Input
          type='text'
          defaultValue={task.title}
          placeholder='Enter title of a task'
          {...register('title', submitOptions.title)}
        />
        {errors.title && <C.Error>{errors.title.message}</C.Error>}
        <C.Text $weight={400} $size={12}>Deadline Time</C.Text>
        <C.Input type='date' defaultValue={task.deadline} {...register('data', submitOptions.data)} />
        {errors.data && <C.Error>{errors.data.message}</C.Error>}
        <C.Text $weight={400} $size={12}>File</C.Text>
        <C.Input type='file' />
      </S.ModalForm>
    </Modal>
  );
}

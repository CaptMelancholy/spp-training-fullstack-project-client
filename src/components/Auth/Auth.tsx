import * as S from './Auth.styles';
import * as C from '../../styles/components';
import { generatePath, Link, useNavigate } from 'react-router-dom';
import DefaultRoutes from '../../routes/Routes';
import { IAuthInputData } from './Auth.types';
import { useForm } from 'react-hook-form';
import { IUserAuthorization } from '../../utils/User/User.types';
import axios from 'axios';
import api from '../../API/api';
import { useAuth } from '../../context/AuthHooks';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/users/users.slice';
import { connectSocket } from '../../API/socket';

export default function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAuthInputData>();
  const { setAuth } = useAuth();

  const submitOptions = {
    email: {
      required: 'You need to input your email',
    },
    password: {
      required: 'You need to enter a password',
      validate: (val: string) => {
        function containsOnlyDigits(str: string) {
          return /^\d+$/.test(str);
        }

        function containsOnlyLetters(str: string) {
          return /^[a-zA-Z]+$/.test(str);
        }
        if (val.length < 6) {
          return 'Password must be not less then 6 characters (letters and numbers)';
        }
        if (containsOnlyDigits(val) || containsOnlyLetters(val)) {
          return 'Password must include both letters and numbers';
        }
      },
    },
  };

  const handleSubmitAuth = (data: IAuthInputData) => {
    const authUser = async (user: IUserAuthorization) => {
      try {
        const response = await api.post('login', user);
        setAuth(response.data.username);
        dispatch(setUser(true));
        connectSocket();
        navigate(DefaultRoutes.home);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.status);
          console.error(error.response);
          const path = generatePath(DefaultRoutes.error);
          navigate(path);
        } else {
          console.error(error);
          const path = generatePath(DefaultRoutes.error);
          navigate(path);
        }
      }
    };

    const user: IUserAuthorization = {
      email: data.email,
      password: data.password,
    };
    authUser(user);
    reset();
  };

  return (
    <S.Container>
      <S.AuthContainer onSubmit={handleSubmit(handleSubmitAuth)}>
        <S.InputFormContainer>
          <C.Text
            $weight={400}
            $size={12}
          >
            Email
          </C.Text>
          <C.Input
            type='email'
            {...register('email', submitOptions.email)}
            required
          />
          {errors.email && <C.Error>{errors.email.message}</C.Error>}
        </S.InputFormContainer>
        <S.InputFormContainer>
          <C.Text
            $weight={400}
            $size={12}
          >
            Password
          </C.Text>
          <C.Input
            type='password'
            required
            {...register('password', submitOptions.password)}
          />
          {errors.password && <C.Error>{errors.password.message}</C.Error>}
        </S.InputFormContainer>
        <C.Button
          type='submit'
          $buttonType={C.EButtonType.fill}
        >
          Submit
        </C.Button>
        <C.Text
          $weight={400}
          $size={14}
        >
          Don't have an account?{' '}
          <Link to={generatePath(DefaultRoutes.registration)}>Sign up</Link>
        </C.Text>
      </S.AuthContainer>
    </S.Container>
  );
}

import * as S from './Registration.styles';
import * as C from '../../styles/components';
import { generatePath, Link, useNavigate } from 'react-router-dom';
import DefaultRoutes from '../../routes/Routes';
import { useForm } from 'react-hook-form';
import { IRegistrationInputData } from './Registration.types';
import { IUser, IUserRegistration } from '../../utils/User/User.types';
import api from '../../API/api';
import axios from 'axios';

export default function Registration() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IRegistrationInputData>();

  const submitOptions = {
    username: {
        required: 'You need to input your username',
    },
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
      confirm_password: {
        required: 'You need to enter confirmation of password',
        validate: (val: string) => {
          if (watch('password') != val) {
            return 'Passwords do not match';
          }
        },
      },
  }

  const handleSubmitRegistration = (data: IRegistrationInputData) => {
    const registerUser = async (user : IUser) => {
      try {
        await api.post('register', user);
        navigate(DefaultRoutes.success);
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
    
    const user : IUserRegistration = {
      username: data.username,
      email: data.email,
      password: data.password,
      confirm_password: data.confirm_password
    }
    registerUser(user);
    reset();
  }

  return (
    <S.Container>
      <S.RegistrationContainer onSubmit={handleSubmit(handleSubmitRegistration)}>
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
            Username
          </C.Text>
          <C.Input
            type='username'
            {...register('username', submitOptions.username)}
            required
          />
          {errors.username && <C.Error>{errors.username.message}</C.Error>}
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
        <S.InputFormContainer>
          <C.Text
            $weight={400}
            $size={12}
          >
            Confirm password
          </C.Text>
          <C.Input
            type='password'
            required
            {...register('confirm_password', submitOptions.confirm_password)}
          />
          {errors.confirm_password && <C.Error>{errors.confirm_password.message}</C.Error>}
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
          Have an account?{' '}
          <Link to={generatePath(DefaultRoutes.authorization)}>Sign in</Link>
        </C.Text>
      </S.RegistrationContainer>
    </S.Container>
  );
}

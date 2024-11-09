import React, { useEffect } from 'react';
import { generatePath, Navigate, useNavigate } from 'react-router-dom';
import DefaultRoutes from '../../routes/Routes';
import { useAuth } from '../../context/AuthHooks';
import api from '../../API/api';
import axios from 'axios';
import { PrivateRoute } from '../../components/Routes/PriveteRoute';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/users/users.slice';

export default function LogoutPage() {
  const { setAuth } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const handleLogout = async () => {
      try {
        await api.post('logout');
        setAuth(null);
        dispatch(setUser(false));
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
    handleLogout();
  }, []);
  return (
    <PrivateRoute>
      <Navigate to={DefaultRoutes.authorization} />
    </PrivateRoute>
  );
}

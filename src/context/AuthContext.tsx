import { createContext, ReactNode, useEffect, useState } from 'react';
import api from '../API/api';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { setUser } from '../store/slices/users/users.slice';

export interface AuthContextType {
  auth: string | null;
  setAuth: (auth: string | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
  auth: null,
  setAuth: () => {},
});

interface IProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: IProps) => {
  const [auth, setAuth] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api.get('check-auth');
        setAuth(response.data.username);
        dispatch(setUser(true));
      } catch (error) {
        console.error(error);
        setAuth(null);
        dispatch(setUser(false));
      }
    };
    checkAuth();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
    </AuthContext.Provider>
  );
};
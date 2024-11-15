import { createContext, ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { setUser } from '../store/slices/users/users.slice';
import { CHECK_AUTH } from '../API/graphql';
import { client } from '../API/client';

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
        const { data } = await client.query({
          query: CHECK_AUTH,
        });
        setAuth(data.checkAuth.username);
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
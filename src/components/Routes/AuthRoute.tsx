import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import DefaultRoutes from '../../routes/Routes';
import { useAuth } from '../../context/AuthHooks';

interface IProps {
    children: ReactNode;
}

export const AuthRoute = ({ children } : IProps) => {
    const { auth } = useAuth();
    return auth ? <Navigate to={DefaultRoutes.home} /> : children;
};
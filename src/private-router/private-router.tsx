import React from 'react';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTE } from '@constants/constants';


export const PrivateRouter: React.FC = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth);

    return isAuth ? <Outlet /> : <Navigate to={ROUTE.INDEX} />
}

import React from 'react';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTE } from '@constants/constants';
import { isAuthSelector } from '@redux/sagas/selectors';


export const PrivateRouter: React.FC = () => {
    const isAuth = useAppSelector(isAuthSelector);

    return isAuth ? <Outlet /> : <Navigate to={ROUTE.INDEX} />
}

import React from 'react';
import { HistoryRouter } from "redux-first-history/rr6";
import { history } from '@redux/configure-store';

import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages';
import { AuthPage } from '@pages/auth-page';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { ROUTE } from '@constants/constants';

export const App: React.FC = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth);

    return (
        <HistoryRouter history={history}>
            <Routes>
                <Route path={ROUTE.INDEX} element={isAuth ? <Navigate to='/main' /> : <Navigate to='/auth' />} />
                <Route path={ROUTE.MAIN} element={isAuth ? <MainPage /> : <Navigate to='/auth' />} />
                <Route path={ROUTE.AUTH} element={<AuthPage />} />
                <Route path={ROUTE.REGISTRATION} element={<AuthPage />} />
                <Route path={ROUTE.CONFIRM} element={<AuthPage />} />
                <Route path={ROUTE.CHANGE_PASS} element={<AuthPage />} />
                <Route path={ROUTE.WRONG} element={isAuth ? <Navigate to='/main' /> : <Navigate to='/auth' />} />
            </Routes>
        </HistoryRouter>
    );
};









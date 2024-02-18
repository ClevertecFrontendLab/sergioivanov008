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
                <Route path={ROUTE.INDEX} element={isAuth ? <Navigate to={ROUTE.MAIN} /> : <Navigate to={ROUTE.AUTH} />} />
                <Route path={ROUTE.MAIN} element={isAuth ? <MainPage /> : <Navigate to={ROUTE.AUTH} />} />
                <Route path={ROUTE.AUTH} element={<AuthPage isAuth={true} />} />
                <Route path={ROUTE.REGISTRATION} element={<AuthPage isAuth={false} />} />
                <Route path={ROUTE.WRONG} element={isAuth ? <Navigate to={ROUTE.MAIN} /> : <Navigate to={ROUTE.AUTH} />} />
            </Routes>
        </HistoryRouter>
    );
};









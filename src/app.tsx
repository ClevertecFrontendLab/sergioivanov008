import React from 'react';
import { HistoryRouter } from "redux-first-history/rr6";
import { history } from '@redux/configure-store';

import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages';
import { AuthPage } from '@pages/auth-page';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { ROUTE, TOKEN } from '@constants/constants';
import { ResultPage } from '@pages/result-page';
import { ConfirmPage } from '@pages/confirm-page';
import { ChangePassPage } from '@pages/change-pass-page';
import { authActions } from '@redux/slices/auth-slice';
import { push } from 'redux-first-history';
import { getIsRemembered } from '@utils/utils';

export const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(state => state.auth.isAuth);
    const canResultPage = useAppSelector(state => state.auth.canResultPage);
    const canConfirmPage = useAppSelector(state => state.apiForgotPass.canConfirmPage);
    const canChangePassPage = useAppSelector(state => state.apiConfirmPass.canChangePassPage);

    if (location.search) {
        const accessToken = location.search.split('=')[1];
        if (getIsRemembered()) localStorage.setItem(TOKEN, accessToken);
        dispatch(authActions.setIsAuth(true));
        dispatch(push(ROUTE.MAIN));
    }

    return (
        <HistoryRouter history={history}>
            <Routes>
                <Route path={ROUTE.INDEX} element={isAuth ? <Navigate to={ROUTE.MAIN} /> : <Navigate to={ROUTE.AUTH} />} />
                <Route path={ROUTE.MAIN} element={isAuth ? <MainPage /> : <Navigate to={ROUTE.AUTH} />} />
                <Route path={ROUTE.AUTH} element={isAuth ? <MainPage /> : <AuthPage isThisAuthPage={true} />} />
                <Route path={ROUTE.REGISTRATION} element={isAuth ? <MainPage /> : <AuthPage isThisAuthPage={false} />} />
                <Route path={ROUTE.ROUTE_RESULT} element={canResultPage ? <ResultPage /> : <Navigate to={ROUTE.INDEX} />} />
                <Route path={ROUTE.CONFIRM} element={canConfirmPage ? <ConfirmPage /> : <Navigate to={ROUTE.INDEX} />} />
                <Route path={ROUTE.CHANGE_PASS} element={canChangePassPage ? <ChangePassPage /> : <Navigate to={ROUTE.INDEX} />} />
                <Route path={ROUTE.WRONG} element={isAuth ? <Navigate to={ROUTE.MAIN} /> : <Navigate to={ROUTE.AUTH} />} />
            </Routes>
        </HistoryRouter>
    );
};









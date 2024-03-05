import React from 'react';
import { HistoryRouter } from "redux-first-history/rr6";
import { history } from '@redux/configure-store';

import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
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
import { PrivateRouter } from './private-router';
import { Layout } from '@components/layout';
import { FeedbacksPage } from '@pages/feedbacks-page';
import {
    canChangePassPageSelector,
    canConfirmPageSelector,
    canResultPageSelector,
    isAuthSelector } from '@redux/sagas/selectors';

export const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(isAuthSelector);
    const canResultPage = useAppSelector(canResultPageSelector);
    const canConfirmPage = useAppSelector(canConfirmPageSelector);
    const canChangePassPage = useAppSelector(canChangePassPageSelector);

    if (location.search) {
        const accessToken = location.search.split('=')[1];
        if (getIsRemembered()) {
            localStorage.setItem(TOKEN, accessToken);
        } else {
            sessionStorage.setItem(TOKEN, accessToken);
        }
        dispatch(authActions.setIsAuth(true));
        dispatch(push(ROUTE.MAIN));
    }

    return (
        <HistoryRouter history={history}>
            <Routes>
                <Route path={ROUTE.INDEX} element={isAuth ? <MainPage /> : <Navigate to={ROUTE.AUTH} />} />
                <Route path={ROUTE.AUTH} element={isAuth ? <MainPage /> : <AuthPage isThisAuthPage={true} />} />
                <Route path={ROUTE.REGISTRATION} element={isAuth ? <MainPage /> : <AuthPage isThisAuthPage={false} />} />
                <Route path={ROUTE.ROUTE_RESULT} element={canResultPage ? <ResultPage /> : <Navigate to={ROUTE.INDEX} />} />
                <Route path={ROUTE.CONFIRM} element={canConfirmPage ? <ConfirmPage /> : <Navigate to={ROUTE.INDEX} />} />
                <Route path={ROUTE.CHANGE_PASS} element={canChangePassPage ? <ChangePassPage /> : <Navigate to={ROUTE.INDEX} />} />
                <Route path={ROUTE.WRONG} element={isAuth ? <Navigate to={ROUTE.MAIN} /> : <Navigate to={ROUTE.AUTH} />} />
                <Route element={<PrivateRouter />} >
                    <Route path={ROUTE.INDEX} element={<Layout />}>
                        <Route element={<Outlet />}>
                            <Route path={ROUTE.INDEX} element={<Navigate to={ROUTE.MAIN} />} />
                            <Route path={ROUTE.MAIN} element={<MainPage />} />
                            <Route path={ROUTE.FEEDBACKS} element={<FeedbacksPage />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </HistoryRouter>
    );
};









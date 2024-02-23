import { apiRegistrationActions } from "@redux/slices/api-registration-slice";
import { LoginOkResponse, LoginRegistrationData } from "../../types/types";
import { all, call, put, select, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { loadersActions } from "@redux/slices/loaders-slice";
import { userLogin, userRegistration } from "../../../src/api/api";
import { AxiosError } from "axios";
import { push } from "redux-first-history";
import { ROUTE, TOKEN } from "@constants/constants";
import { authActions } from "@redux/slices/auth-slice";
import { rememberMe } from "./selectors";

function* workRegistrationUserSaga(action: PayloadAction<{ registrationData: LoginRegistrationData }>) {
    yield put(authActions.setCanResultPage(true));

    try {
        yield call(userRegistration, action.payload.registrationData);
        yield put(apiRegistrationActions.resetRegistrationData());
        yield put(push(`${ROUTE.RES}${ROUTE.RES_OK}`));
        yield put(loadersActions.toggleIsLoaderVisible(false));
    } catch (e: unknown) {
        const error = e as AxiosError;

        yield put(loadersActions.toggleIsLoaderVisible(false));

        if (error?.response?.status === 409) {
            yield put(apiRegistrationActions.resetRegistrationData());
            yield put(push(`${ROUTE.RES}${ROUTE.RES_ERROR_409}`));
        } else {
            yield put(push(`${ROUTE.RES}${ROUTE.RES_ERROR}`));
        }
    }
}

function* watchRegistrationUserSaga() {
    yield takeEvery(apiRegistrationActions.startRegistration, workRegistrationUserSaga);
}

function* workLoginUserSaga(action: PayloadAction<{ registrationData: LoginRegistrationData }>) {
    yield put(authActions.setCanResultPage(true));

    try {
        const response: LoginOkResponse = yield call(userLogin, action.payload.registrationData);

        yield put(authActions.setIsAuth(true));
        const isRememberMe: boolean = yield select(rememberMe);
        if (isRememberMe) localStorage.setItem(TOKEN, response.accessToken);
        yield put(authActions.resetLoginData());
        yield put(push(`${ROUTE.MAIN}`));
        yield put(loadersActions.toggleIsLoaderVisible(false));
    } catch (e: unknown) {
        yield put(authActions.resetLoginData());
        yield put(push(`${ROUTE.RES}${ROUTE.RES_ERROR_LOGIN}`));
        yield put(loadersActions.toggleIsLoaderVisible(false));
    }
}

function* watchLoginUserUserSaga() {
    yield takeEvery(authActions.startLogin, workLoginUserSaga);
}

export function* rootSaga() {
    yield all([
        watchRegistrationUserSaga(),
        watchLoginUserUserSaga(),
    ]);
}

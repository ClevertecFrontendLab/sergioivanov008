import { apiRegistrationActions } from "@redux/slices/api-registration-slice";
import { ForgotPassData, ForgotPassErrorResponse, ForgotPassOkResponse, LoginOkResponse, LoginRegistrationData } from "../../types/types";
import { all, call, put, select, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { loadersActions } from "@redux/slices/loaders-slice";
import { forgotPassword, userLogin, userRegistration } from "../../../src/api/api";
import { AxiosError } from "axios";
import { push } from "redux-first-history";
import { API_MESSAGES, ROUTE, TOKEN } from "@constants/constants";
import { authActions } from "@redux/slices/auth-slice";
import { rememberMe } from "./selectors";
import { apiForgotPassActions } from "@redux/slices/api-forgot-pass-slice";

function* workRegistrationUserSaga(action: PayloadAction<{ registrationData: LoginRegistrationData }>) {
    yield put(loadersActions.toggleIsLoaderVisible(true));
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
    yield put(loadersActions.toggleIsLoaderVisible(true));
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

function* workForgotPassSaga(action: PayloadAction<{ forgotPassData: ForgotPassData }>) {
    yield put(loadersActions.toggleIsLoaderVisible(true));
    yield put(authActions.setCanResultPage(true));
    yield put(apiRegistrationActions.resetRegistrationData());
    yield put(authActions.resetRegData());
    yield put(authActions.resetLoginData());

    try {
        const response: ForgotPassOkResponse = yield call(forgotPassword, action.payload.forgotPassData);
        console.log('response: ', response)

        // yield put(push(`${ROUTE.RES}${ROUTE.RES_OK}`));//!
        yield put(loadersActions.toggleIsLoaderVisible(false));
    } catch (e: unknown) {
        const error = e as AxiosError;
        const errorResponseData  = error?.response?.data as ForgotPassErrorResponse;

        yield put(loadersActions.toggleIsLoaderVisible(false));

        if (error?.response?.status === 404) {
            if (errorResponseData.message === API_MESSAGES.EMAIL_NOT_FOUND) {
                yield put(apiForgotPassActions.resetForgotPassData());
                yield put(push(`${ROUTE.RES}${ROUTE.RES_FORGOT_ERROR_404}`));
            } else {
                yield put(push(`${ROUTE.RES}${ROUTE.RES_FORGOT_ERROR}`));
            }
        } else {
            yield put(push(`${ROUTE.RES}${ROUTE.RES_FORGOT_ERROR}`));
        }
    }
}

function* watchForgotPassSaga() {
    yield takeEvery(apiForgotPassActions.startForgotPass, workForgotPassSaga);
}

export function* rootSaga() {
    yield all([
        watchRegistrationUserSaga(),
        watchLoginUserUserSaga(),
        watchForgotPassSaga(),
    ]);
}

import { apiRegistrationActions } from "@redux/slices/api-registration-slice";
import {
    ChangePassData,
    ChangePassOkResponse,
    ConfirmPassData,
    ConfirmPassOkResponse,
    ErrorResponse,
    ForgotPassData,
    ForgotPassOkResponse,
    LoginOkResponse,
    LoginRegistrationData } from "../../types/types";
import { all, call, put, select, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { loadersActions } from "@redux/slices/loaders-slice";
import {
    changePassword,
    confirmPassword,
    forgotPassword,
    userLogin,
    userRegistration } from "../../../src/api/api";
import { AxiosError } from "axios";
import { push } from "redux-first-history";
import { API_MESSAGES, ROUTE, STATUS, TOKEN } from "@constants/constants";
import { authActions } from "@redux/slices/auth-slice";
import { rememberMe } from "./selectors";
import { apiForgotPassActions } from "@redux/slices/api-forgot-pass-slice";
import { apiConfirmPassActions } from "@redux/slices/api-confirm-pass-slice";

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

        if (error?.response?.status === STATUS.CODE_409) {
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
        yield put(authActions.resetRegData());
        yield put(authActions.setCanResultPage(false));
        yield put(push(ROUTE.MAIN));
        yield put(loadersActions.toggleIsLoaderVisible(false));
    } catch (e) {
        yield put(authActions.resetLoginData());
        yield put(authActions.resetRegData());
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
    yield put(apiForgotPassActions.setCanConfirmPage(true));

    try {
        const response: ForgotPassOkResponse = yield call(forgotPassword, action.payload.forgotPassData);
        yield put(apiForgotPassActions.setForgotPassOkResponse(response));

        yield put(push(ROUTE.CONFIRM));
        yield put(loadersActions.toggleIsLoaderVisible(false));
    } catch (e: unknown) {
        const error = e as AxiosError;
        const errorResponseData  = error?.response?.data as ErrorResponse;

        yield put(loadersActions.toggleIsLoaderVisible(false));

        if (error?.response?.status === STATUS.CODE_404) {
            if (errorResponseData.message === API_MESSAGES.EMAIL_NOT_FOUND) {
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

function* workConfirmPassSaga(action: PayloadAction<{ confirmPassData: ConfirmPassData }>) {
    yield put(loadersActions.toggleIsLoaderVisible(true));
    yield put(authActions.setCanResultPage(true));
    yield put(apiRegistrationActions.resetRegistrationData());
    yield put(authActions.resetRegData());
    yield put(authActions.resetLoginData());
    yield put(apiForgotPassActions.setCanConfirmPage(true));

    try {
        const response: ConfirmPassOkResponse = yield call(confirmPassword, action.payload.confirmPassData);
        yield put(apiForgotPassActions.setForgotPassOkResponse(response));

        yield put(push(ROUTE.CHANGE_PASS));
        yield put(loadersActions.toggleIsLoaderVisible(false));
    } catch (e) {
        yield put(apiConfirmPassActions.resetConfirmPassState());
        yield put(apiConfirmPassActions.setIsErrorConfirmCode(true));
        yield put(loadersActions.toggleIsLoaderVisible(false));
    }
}

function* watchConfirmPassSaga() {
    yield takeEvery(apiConfirmPassActions.startConfirmPass, workConfirmPassSaga);
}

function* workChangePassSaga(action: PayloadAction<{ changePassData: ChangePassData }>) {
    yield put(loadersActions.toggleIsLoaderVisible(true));
    yield put(authActions.setCanResultPage(true));
    yield put(apiRegistrationActions.resetRegistrationData());
    yield put(authActions.resetRegData());
    yield put(authActions.resetLoginData());
    yield put(apiForgotPassActions.setCanConfirmPage(true));

    try {
        const response: ChangePassOkResponse = yield call(changePassword, action.payload.changePassData);
        yield put(apiForgotPassActions.setForgotPassOkResponse(response));

        yield put(push(`${ROUTE.RES}${ROUTE.RES_SUCCESS_CHANGE_PASS}`));
        yield put(loadersActions.toggleIsLoaderVisible(false));
    } catch (e) {
        yield put(push(`${ROUTE.RES}${ROUTE.RES_ERROR_CHANGE_PASS}`));
        yield put(loadersActions.toggleIsLoaderVisible(false));
    }
}

function* watchChangePassSaga() {
    yield takeEvery(authActions.startChangePass, workChangePassSaga);
}

export function* rootSaga() {
    yield all([
        watchRegistrationUserSaga(),
        watchLoginUserUserSaga(),
        watchForgotPassSaga(),
        watchConfirmPassSaga(),
        watchChangePassSaga(),
    ]);
}

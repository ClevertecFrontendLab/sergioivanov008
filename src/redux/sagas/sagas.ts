import { apiRegistrationActions } from "@redux/slices/api-registration-slice";
import {
    ChangePassData,
    ChangePassOkResponse,
    ConfirmPassData,
    ConfirmPassOkResponse,
    ErrorResponse,
    ForgotPassData,
    ForgotPassOkResponse,
    GetFeedbacksOkResponse,
    LoginOkResponse,
    LoginRegistrationData,
    NewFeedbackPost} from "../../types/types";
import { all, call, put, select, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { loadersActions } from "@redux/slices/loaders-slice";
import {
    changePassword,
    confirmPassword,
    forgotPassword,
    getFeedbacks,
    postNewFeedback,
    userLogin,
    userRegistration } from "../../../src/api/api";
import { AxiosError } from "axios";
import { push } from "redux-first-history";
import { API_MESSAGES, MODAL_FEEDBACKS, ROUTE, STATUS, TOKEN } from "@constants/constants";
import { authActions } from "@redux/slices/auth-slice";
import { rememberMeSelector } from "./selectors";
import { apiForgotPassActions } from "@redux/slices/api-forgot-pass-slice";
import { apiConfirmPassActions } from "@redux/slices/api-confirm-pass-slice";
import { feedbacksActions } from "@redux/slices/feedbacks-slice";
import { clearLocalStorage } from "@utils/utils";

function* workRegistrationUserSaga(action: PayloadAction<{ registrationData: LoginRegistrationData }>) {
    yield put(loadersActions.toggleIsLoaderVisible(true));
    yield put(authActions.setCanResultPage(true));

    try {
        yield call(userRegistration, action.payload.registrationData);
        yield put(apiRegistrationActions.resetRegistrationData());
        yield put(push(`${ROUTE.RES}${ROUTE.RES_OK}`));
    } catch (e: unknown) {
        const error = e as AxiosError;

        if (error?.response?.status === STATUS.CODE_409) {
            yield put(apiRegistrationActions.resetRegistrationData());
            yield put(push(`${ROUTE.RES}${ROUTE.RES_ERROR_409}`));
        } else {
            yield put(push(`${ROUTE.RES}${ROUTE.RES_ERROR}`));
        }
    } finally {
        yield put(loadersActions.toggleIsLoaderVisible(false));
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
        const isRememberMe: boolean = yield select(rememberMeSelector);
        if (isRememberMe) {
            localStorage.setItem(TOKEN, response.accessToken);
        } else {
            sessionStorage.setItem(TOKEN, response.accessToken);
        }
        yield put(authActions.resetLoginData());
        yield put(authActions.resetRegData());
        yield put(authActions.setCanResultPage(false));
        yield put(push(ROUTE.MAIN));
    } catch (e) {
        yield put(authActions.resetLoginData());
        yield put(authActions.resetRegData());
        yield put(push(`${ROUTE.RES}${ROUTE.RES_ERROR_LOGIN}`));
    } finally {
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
    } catch (e: unknown) {
        const error = e as AxiosError;
        const errorResponseData  = error?.response?.data as ErrorResponse;

        if (error?.response?.status === STATUS.CODE_404) {
            if (errorResponseData.message === API_MESSAGES.EMAIL_NOT_FOUND) {
                yield put(push(`${ROUTE.RES}${ROUTE.RES_FORGOT_ERROR_404}`));
            } else {
                yield put(push(`${ROUTE.RES}${ROUTE.RES_FORGOT_ERROR}`));
            }
        } else {
            yield put(push(`${ROUTE.RES}${ROUTE.RES_FORGOT_ERROR}`));
        }
    } finally {
        yield put(loadersActions.toggleIsLoaderVisible(false));
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
    } catch (e) {
        yield put(apiConfirmPassActions.resetConfirmPassState());
        yield put(apiConfirmPassActions.setIsErrorConfirmCode(true));
    } finally {
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
    } catch (e) {
        yield put(push(`${ROUTE.RES}${ROUTE.RES_ERROR_CHANGE_PASS}`));
    } finally {
        yield put(loadersActions.toggleIsLoaderVisible(false));
    }
}

function* watchChangePassSaga() {
    yield takeEvery(authActions.startChangePass, workChangePassSaga);
}

function* workGetFeedbacksFetchSaga() {
    yield put(loadersActions.toggleIsLoaderVisible(true));

    try {
        const response: GetFeedbacksOkResponse = yield call(getFeedbacks);
        yield put(feedbacksActions.getFeedbacksSuccess(response));
    } catch (e: unknown) {
        const error = e as AxiosError;

        if (error?.response?.status === STATUS.CODE_403) {
            yield put(authActions.setIsAuth(false));
            yield clearLocalStorage();
            yield put(push(ROUTE.AUTH));
        } else {
            yield put(feedbacksActions.setShowModalFeedbacks(MODAL_FEEDBACKS.MODAL_WRONG));
        }
    } finally {
        yield put(loadersActions.toggleIsLoaderVisible(false));
    }
}

function* watchGetFeedbacksFetchSaga() {
    yield takeEvery(feedbacksActions.getFeedbacksFetch, workGetFeedbacksFetchSaga);
}

function* workNewFeedbackPostSaga(action: PayloadAction<{ newFeedbackPost: NewFeedbackPost }>) {
    yield put(loadersActions.toggleIsLoaderVisible(true));

    try {
        yield call(postNewFeedback, action.payload.newFeedbackPost);
        yield workGetFeedbacksFetchSaga();

        yield put(feedbacksActions.setShowModalFeedbacks(MODAL_FEEDBACKS.MODAL_SUCCESS));
    } catch (e) {
        yield put(feedbacksActions.setShowModalFeedbacks(MODAL_FEEDBACKS.MODAL_ERROR));
    } finally {
        yield put(loadersActions.toggleIsLoaderVisible(false));
        yield put(feedbacksActions.clearNewFeedbackPost());
    }
}

function* watchNewFeedbackPostSaga() {
    yield takeEvery(feedbacksActions.startNewFeedbackPost, workNewFeedbackPostSaga);
}

export function* rootSaga() {
    yield all([
        watchRegistrationUserSaga(),
        watchLoginUserUserSaga(),
        watchForgotPassSaga(),
        watchConfirmPassSaga(),
        watchChangePassSaga(),
        watchGetFeedbacksFetchSaga(),
        watchNewFeedbackPostSaga(),
    ]);
}

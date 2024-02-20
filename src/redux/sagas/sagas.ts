import { apiRegistrationActions } from "@redux/slices/api-registration-slice";
import { RegistrationData } from "../../types/types";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { toggleIsLoaderVisible } from "@redux/slices/loaders-slice";
import { userRegistration } from "../../../src/api/api";
import { AxiosError } from "axios";
import { push } from "redux-first-history";
import { ROUTE } from "@constants/constants";
import { authActions } from "@redux/slices/auth-slice";

function* workRegistrationUserSaga(action: PayloadAction<{ registrationData: RegistrationData }>) {
    yield put(authActions.setCanResultPage(true));

    try {
        yield call(userRegistration, action.payload.registrationData);
        yield put(apiRegistrationActions.setIsRegistrationOk());
        yield put(apiRegistrationActions.setRegistrationData(null));
        yield put(push(`${ROUTE.RES}${ROUTE.RES_OK}`));
        yield put(toggleIsLoaderVisible(false));
    } catch (e: unknown) {
        const error = e as AxiosError;

        yield put(toggleIsLoaderVisible(false));

        if (error?.response?.status === 409) {
            yield put(apiRegistrationActions.setIsRegistrationError409());
            yield put(push(`${ROUTE.RES}${ROUTE.RES_ERROR_409}`));
        } else {
            yield put(apiRegistrationActions.setIsRegistrationError());
            yield put(push(`${ROUTE.RES}${ROUTE.RES_ERROR}`));
        }
    }
}

function* watchRegistrationUserSaga() {
    yield takeEvery(apiRegistrationActions.startIsLoadingRegistration, workRegistrationUserSaga);
}

export function* rootSaga() {
    yield all([
        watchRegistrationUserSaga(),
    ]);
}

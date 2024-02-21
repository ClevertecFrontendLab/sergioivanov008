import { apiRegistrationActions } from "@redux/slices/api-registration-slice";
import { RegistrationData } from "../../types/types";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { loadersActions } from "@redux/slices/loaders-slice";
import { userRegistration } from "../../../src/api/api";
import { AxiosError } from "axios";
import { push } from "redux-first-history";
import { ROUTE } from "@constants/constants";
import { authActions } from "@redux/slices/auth-slice";

function* workRegistrationUserSaga(action: PayloadAction<{ registrationData: RegistrationData }>) {
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

export function* rootSaga() {
    yield all([
        watchRegistrationUserSaga(),
    ]);
}

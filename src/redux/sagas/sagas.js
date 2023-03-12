import { all, call, put, takeEvery } from 'redux-saga/effects';

import { getBook, getBooks, getCategories, userAuth, userForgotPassword, userRegistration, userResetPassword } from '../../api/api';
import { setAuthData, setIsAuth, setIsAuthError, setIsAuthError400, toggleIsLoadingAuth } from '../slices/api-auth-slice';
import { setIsForgotPassError, setIsFormForgotOk, toggleIsLoadingForgotPass } from '../slices/api-forgot-path-slice';
import { setIsFormRecoveryPassError, setIsFormRecoveryPasstOk, toggleIsLoadingRecoveryPass } from '../slices/api-recovery-pass-slice';
import { setIsRegistrationError, setIsRegistrationError400, setIsRegistrationOk, setRegistrationData, toggleIsLoadingRegistration } from '../slices/api-registration-slice';
import { getBookFailure, getBookSuccess } from '../slices/book-slice';
import { getBooksFailure, getBooksSuccess } from '../slices/books-slice';
import { getCategoriesFailure, getCategoriesSuccess } from '../slices/categories-slice';
import { toggleLoader } from '../slices/loaders-slice';
import { toggleCanUseCategoriesAndBooks } from '../slices/main-slice';


function* workGetCategoriesFetchSaga() {
    try {
        const categories = yield call(getCategories);

        yield put(getCategoriesSuccess(categories.data));
    } catch (e) {
        yield put(getCategoriesFailure());
        yield put(toggleCanUseCategoriesAndBooks(false));
        yield put(toggleLoader(false));
    }
}

function* workGetBooksFetchSaga() {
    try {
        const books = yield call(getBooks);

        yield put(getBooksSuccess(books.data));
    } catch (e) {
        yield put(getBooksFailure());
        yield put(toggleCanUseCategoriesAndBooks(false));
        yield put(toggleLoader(false));
    }
}

function* workGetBookFetchSaga(action) {
    try {
        const book = yield call(getBook, action.payload);

        yield put(getBookSuccess(book.data));
        yield put(toggleLoader(false));
    } catch (e) {
        yield put(getBookFailure());
        yield put(toggleCanUseCategoriesAndBooks(false));
        yield put(toggleLoader(false));
    }
}

function* watchGetCategoriesFetchSaga() {
    yield takeEvery('categories/getCategoriesFetch', workGetCategoriesFetchSaga);
}

function* watchGetBooksFetchSaga() {
    yield takeEvery('books/getBooksFetch', workGetBooksFetchSaga);
}

function* watchGetBookFetchSaga() {
    yield takeEvery('book/getBookFetch', workGetBookFetchSaga);
}

function* watchCategoriesAndBooksSaga() {
    yield put(toggleLoader(true));
    yield all([watchGetCategoriesFetchSaga(), watchGetBooksFetchSaga()]);
    yield put(toggleLoader(false));
}

function* workRegistrationUserSaga(action) {
    try {
        const response = yield call(userRegistration, action.payload);

        yield localStorage.setItem('cleverToken', response.data.jwt);
        yield put(toggleIsLoadingRegistration(false));
        yield put(setRegistrationData(null));
        yield put(setIsRegistrationOk());
    } catch (e) {
        yield put(toggleIsLoadingRegistration(false));
        if (e.response.status === 400) {
            yield put(setIsRegistrationError400());
            yield put(setRegistrationData(null));
        } else {
            yield put(setIsRegistrationError());
        }
    }
}

function* watchRegistrationUserSaga() {
    yield takeEvery('apiRegistration/startIsLoadingRegistration', workRegistrationUserSaga);
}

function* workAuthUserSaga(action) {
    try {
        const response = yield call(userAuth, action.payload);

        yield localStorage.setItem('cleverToken', response.data.jwt);
        yield put(setIsAuth(true));
        yield put(toggleIsLoadingAuth(false));
        yield put(setAuthData(null));
    } catch (e) {
        yield put(toggleIsLoadingAuth(false));
        if (e.response.status === 400) {
            yield put(setIsAuthError400());
            yield put(setAuthData(null));
        } else {
            yield put(setIsAuthError());
        }
    }
}

function* watchAuthUserSaga() {
    yield takeEvery('apiAuth/startIsLoadingAuth', workAuthUserSaga);
}

function* workForgotPassSaga(action) {
    try {
        yield call(userForgotPassword, action.payload);
        yield put(toggleIsLoadingForgotPass(false));
        yield put(setIsFormForgotOk());
    } catch (e) {
        yield put(toggleIsLoadingForgotPass(false));
        yield put(setIsForgotPassError());
    }
}

function* watchForgotPassSaga() {
    yield takeEvery('apiForgotPass/startIsLoadingForgotPass', workForgotPassSaga);
}

function* workRecoveryPassSaga(action) {
    try {
        yield call(userResetPassword, action.payload);
        yield put(toggleIsLoadingRecoveryPass(false));
        yield put(setIsFormRecoveryPasstOk());
    } catch (e) {
        yield put(toggleIsLoadingRecoveryPass(false));
        yield put(setIsFormRecoveryPassError());
    }
}

function* watchRecoveryPassSaga() {
    yield takeEvery('apiRecoveryPass/startIsLoadingRecoveryPass', workRecoveryPassSaga);
}

export function* rootSaga() {
    yield all([
        watchCategoriesAndBooksSaga(),
        watchGetBookFetchSaga(),
        watchRegistrationUserSaga(),
        watchAuthUserSaga(),
        watchForgotPassSaga(),
        watchRecoveryPassSaga()
    ]);
}

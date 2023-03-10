import { all, call, put, takeEvery } from 'redux-saga/effects';

import { getBook, getBooks, getCategories, userAuth, userRegistration } from '../../api/api';
import { setAuthData, setIsAuthError, setIsAuthError400, toggleIsLoadingAuth } from '../slices/api-auth-slice';
import { setIsRegistrationError, setIsRegistrationError400, setRegistrationData, toggleIsLoadingRegistration } from '../slices/api-registration-slice';
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

export function* rootSaga() {
    yield all([
        watchCategoriesAndBooksSaga(),
        watchGetBookFetchSaga(),
        watchRegistrationUserSaga(),
        watchAuthUserSaga()
    ]);
}

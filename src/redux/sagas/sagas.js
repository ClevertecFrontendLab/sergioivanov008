import { all, call, put, takeEvery } from 'redux-saga/effects';

import { getBook, getBooks, getCategories } from '../../api/api';
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

export function* rootSaga() {
    yield all([watchCategoriesAndBooksSaga(), watchGetBookFetchSaga()]);
}

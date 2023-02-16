import { all, call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { deleteBooks, getBooksFailure, getBooksSuccess } from '../slices/books-slice';
import { deleteCategories, getCategoriesFailure, getCategoriesFetch, getCategoriesSuccess } from '../slices/categories-slice';
import { toggleErrorLoader, toggleLoader } from '../slices/loaders-slice';

const urlTest = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
const urlTest2 = 'https://jsonplaceholder.typicode.com/posts?_limit=20';
// const urlTest = 'https://strapi.cleverland.by/api/categories';
// const urlTest2 = 'https://strapi.cleverland.by/api/books';

// function* workGetCategoriesFetch() {
//     yield put(toggleLoader(true));

//     try {
//         const [categories, books] = yield all([
//             call(axios.get(urlTest)),
//             call(axios.get(urlTest2))
//         ])

//         yield put(getCategoriesSuccess(categories.data));
//         yield put(getBooksSuccess(books.data));
//     } catch (e) {
//         yield put(getCategoriesFailure());
//         yield put(getBooksFailure());
//         yield put(toggleErrorLoader(true));
//         yield put(deleteCategories());
//         yield put(deleteBooks());
//     }

//     yield put(toggleLoader(false));
// }
// function* workGetCategoriesFetch() {
//     yield put(toggleLoader(true));

//     try {
//         const categories = yield call(() => axios.get(urlTest));

//         yield put(getCategoriesSuccess(categories.data));
//     } catch (e) {
//         yield put(getCategoriesFailure());
//         yield put(toggleErrorLoader(true));
//         yield put(deleteCategories());
//         yield put(deleteBooks());
//     }

//     try {
//         const books = yield call(() => axios.get(urlTest2));

//         yield put(getBooksSuccess(books.data));
//     } catch (e) {
//         yield put(getBooksFailure());
//         yield put(toggleErrorLoader(true));
//         yield put(deleteCategories());
//         yield put(deleteBooks());
//     }

//     yield put(toggleLoader(false));
// }

function* workGetCategoriesFetch() {
    console.log('workGetCategoriesFetch')
    try {
        const categories = yield call(() => axios.get(urlTest));

        yield put(getCategoriesSuccess(categories.data));
    } catch (e) {
        yield put(getCategoriesFailure());
    }
}

function* workGetBooksFetch() {
    console.log('workGetBooksFetch')
    try {
        const books = yield call(() => axios.get(urlTest2));

        yield put(getBooksSuccess(books.data));
    } catch (e) {
        yield put(getBooksFailure());
    }
}

function* categoriesSaga() {
    yield put(toggleLoader(true));
    // yield takeEvery('categories/getCategoriesFetch', workGetCategoriesFetch);
    // yield takeEvery('categories/getCategoriesFetch', workGetBooksFetch);
    yield put(toggleLoader(false));
}

export default categoriesSaga;

import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import categoriesSaga from './sagas/categories-saga';
import bookListReducer from './slices/book-list-slice';
import bookReducer from './slices/book-slice';
import booksReducer from './slices/books-slice';
import categoriesReducer from './slices/categories-slice';
import loadersReducer from './slices/loaders-slice';
import menuReducer from './slices/menu-slice';

const saga = createSagaMiddleware();

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    books: booksReducer,
    book: bookReducer,
    bookList: bookListReducer,
    loaders: loadersReducer,
    menu: menuReducer
  },
  middleware: [saga]
});

saga.run(categoriesSaga);

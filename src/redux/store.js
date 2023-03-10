import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import { rootSaga } from './sagas/sagas';
import apiAuthReducer from './slices/api-auth-slice';
import apiRegistrationReducer from './slices/api-registration-slice';
import bookListReducer from './slices/book-list-slice';
import bookReducer from './slices/book-slice';
import booksReducer from './slices/books-slice';
import categoriesReducer from './slices/categories-slice';
import loadersReducer from './slices/loaders-slice';
import mainReducer from './slices/main-slice';
import menuReducer from './slices/menu-slice';

const saga = createSagaMiddleware();

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    books: booksReducer,
    book: bookReducer,
    bookList: bookListReducer,
    loaders: loadersReducer,
    menu: menuReducer,
    main: mainReducer,
    apiRegistration: apiRegistrationReducer,
    apiAuth: apiAuthReducer,
  },
  middleware: [saga]
});

saga.run(rootSaga);

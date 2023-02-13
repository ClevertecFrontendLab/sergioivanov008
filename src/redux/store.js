import { configureStore } from '@reduxjs/toolkit';

import bookListReducer from './slices/book-list-slice';
import bookReducer from './slices/book-slice';
import booksReducer from './slices/books-slice';
import categoriesReducer from './slices/categories-slice';
import loadersReducer from './slices/loaders-slice';

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    books: booksReducer,
    book: bookReducer,
    bookList: bookListReducer,
    loaders: loadersReducer
  }
})

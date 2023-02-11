import { configureStore } from '@reduxjs/toolkit';

import bookReducer from './slices/book-slice';
import booksReducer from './slices/books-slice';
import categoriesReducer from './slices/categories-slice';

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    books: booksReducer,
    book: bookReducer
  }
})

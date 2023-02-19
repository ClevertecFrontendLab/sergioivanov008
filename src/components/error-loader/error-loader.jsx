import { useDispatch, useSelector } from 'react-redux';

import { TOAST_MESSAGE } from '../../constants/constants';
import { setIsErrorBook } from '../../redux/slices/book-slice';
import { setIsErrorBooks } from '../../redux/slices/books-slice';
import { setIsErrorCategories } from '../../redux/slices/categories-slice';

import './error-loader.css';

export const ErrorLoader = () => {
    const dispatch = useDispatch();
    const categoriesIsError = useSelector(state => state.categories.isError);
    const booksIsError = useSelector(state => state.books.isError);
    const bookIsError = useSelector(state => state.book.isError);

    const isErrors = categoriesIsError || booksIsError || bookIsError;

    const curView = isErrors ? 'error-loader' : 'error-loader close';

    const errorLoaderClose = () => {
        dispatch(setIsErrorBook(false));
        dispatch(setIsErrorBooks(false));
        dispatch(setIsErrorCategories(false));
    };

    return (
        <div className={curView} data-test-id='error'>
            <div className='error-content'>
                <div className='error-wrapper'>
                    <div className='error-warning' />
                    <div className='error-message'>{TOAST_MESSAGE}</div>
                </div>
                <div
                    className='error-close'
                    onClick={errorLoaderClose}
                    role='presentation' />
            </div>
        </div>
    );
}

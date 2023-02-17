import { useSelector } from 'react-redux';

import { toggleBodyNotScrollable } from '../../functions/toggle-body-not-scrollable';

import './loader.css';

export const Loader = () => {
    const categoriesIsLoading = useSelector(state => state.categories.isLoading);
    const booksIsLoading = useSelector(state => state.books.isLoading);
    const bookIsLoading = useSelector(state => state.book.isLoading);

    const isLoaderVisible = categoriesIsLoading || booksIsLoading || bookIsLoading;

    toggleBodyNotScrollable(isLoaderVisible);

    const loaderStyle = isLoaderVisible ? 'loader show' : 'loader';

    return (
        <div className={loaderStyle} data-test-id='loader'>
            <div className='loader-image' />
        </div>
    );
}

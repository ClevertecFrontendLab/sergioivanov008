import { useSelector } from 'react-redux';

import { toggleBodyNotScrollable } from '../../functions/functions';

import './loader.css';

export const Loader = () => {
    const categoriesIsLoading = useSelector(state => state.categories.isLoading);
    const booksIsLoading = useSelector(state => state.books.isLoading);
    const bookIsLoading = useSelector(state => state.book.isLoading);
    const isLoaderNeed = useSelector(state => state.loaders.isLoaderVisible);

    const isLoaderVisible = categoriesIsLoading || booksIsLoading || bookIsLoading;

    toggleBodyNotScrollable(isLoaderVisible);

    return (
        isLoaderNeed &&
            <div className={isLoaderVisible ? 'loader show' : 'loader'} data-test-id='loader'>
                <div className='loader-image' />
            </div>

    );
}

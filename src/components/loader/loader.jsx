import { useSelector } from 'react-redux';

import { toggleBodyNotScrollable } from '../../functions/functions';

import './loader.css';

export const Loader = () => {
    const categoriesIsLoading = useSelector(state => state.categories.isLoading);
    const booksIsLoading = useSelector(state => state.books.isLoading);
    const bookIsLoading = useSelector(state => state.book.isLoading);
    const isLoadingRegistration = useSelector(state => state.apiRegistration.isLoadingRegistration);
    const isLoadingAuth = useSelector(state => state.apiAuth.isLoadingAuth);
    const isLoadingForgotPass = useSelector(state => state.apiForgotPass.isLoadingForgotPass);

    const isLoaderVisible = categoriesIsLoading || booksIsLoading || bookIsLoading ||
        isLoadingRegistration || isLoadingAuth || isLoadingForgotPass;

    toggleBodyNotScrollable(isLoaderVisible);

    const loaderStyle = () => isLoaderVisible ? 'loader show' : 'loader';

    return (
        <div className={loaderStyle()} data-test-id='loader'>
            <div className='loader-image' />
        </div>
    );
}

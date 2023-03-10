import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getBooksFetch } from '../../../redux/slices/books-slice';
import { getCategoriesFetch } from '../../../redux/slices/categories-slice';
import { BookList } from '../book-list';
import { NavigationList } from '../navigation-list';

import './library-content.css';

export const LibraryContent = () => {
    const canUse = useSelector(state => state.main.canUseCategoriesAndBooks);

    const isRendered = useRef(false);

    const dispatch = useDispatch();

    const isToken = localStorage.getItem('cleverToken');

    useEffect(() => {
        if (isRendered.current === false && isToken) {
            isRendered.current = true;
            dispatch(getCategoriesFetch());
            dispatch(getBooksFetch());
        }
    }, [dispatch, isRendered, isToken]);

    return (
        <section className='library-content'>
            {canUse && <NavigationList />}
            {canUse && <BookList />}
        </section>
    );
}

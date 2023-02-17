import React from 'react';
import { useSelector } from 'react-redux';

import { ErrorLoader } from '../../../components/error-loader';
import { Loader } from '../../../components/loader';
import { BookList } from '../book-list';
import { NavigationList } from '../navigation-list';

import './library-content.css';

export const LibraryContent = () => {
    const canUse = useSelector(state => state.main.canUseCategoriesAndBooks);

    return (
        <React.Fragment>
            <section className='library-content'>
                {canUse && <NavigationList />}
                {canUse && <BookList />}
            </section>
            <Loader />
            <ErrorLoader />
        </React.Fragment>
    );
}

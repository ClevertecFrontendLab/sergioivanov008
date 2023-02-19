import { useSelector } from 'react-redux';

import { BookList } from '../book-list';
import { NavigationList } from '../navigation-list';

import './library-content.css';

export const LibraryContent = () => {
    const canUse = useSelector(state => state.main.canUseCategoriesAndBooks);

    return (
        <section className='library-content'>
            {canUse && <NavigationList />}
            {canUse && <BookList />}
        </section>
    );
}

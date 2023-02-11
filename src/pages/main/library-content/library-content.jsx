import { BookList } from '../book-list';
import { NavigationList } from '../navigation-list';

import './library-content.css';

export const LibraryContent = () => (
        <section className='library-content'>
            <NavigationList />
            <BookList />
        </section>
    );

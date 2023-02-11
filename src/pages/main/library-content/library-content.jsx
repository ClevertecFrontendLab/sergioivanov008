import { useState } from 'react';

import { BookList } from '../book-list';
import { NavigationList } from '../navigation-list';

import './library-content.css';

export const LibraryContent = () => {
    const [listView, setListView] = useState(true);

    return (
        <section className='library-content'>
            <NavigationList listView={listView} setListView={setListView}/>
            <BookList listView={listView}/>
        </section>
    );
}

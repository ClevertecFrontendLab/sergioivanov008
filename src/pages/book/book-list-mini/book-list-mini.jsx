import { useSelector } from 'react-redux';

import './book-list-mini.css';

export const BookListMini = () => {
    const book = useSelector(state => state.book.book);
    const {categories, title} = book;

    return (
        <nav className='book-list-mini_navigation'>
            <div className='book-list-mini'>
                <div className='book-list-mini_wrapper'>
                    <span className='book-list-mini_category'>{categories}</span>
                    <span className='book-slash'>/</span>
                    <span className='book-list-mini_book-name'>{title}</span>
                </div>
            </div>
        </nav>
    );
}

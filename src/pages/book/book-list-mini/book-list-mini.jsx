import { useSelector } from 'react-redux';

import './book-list-mini.css';

export const BookListMini = () => {
    const book = useSelector(state => state.book.book);
    const {title} = book;
    const canUse = useSelector(state => state.book.canUse);

    const categories = useSelector(state => state.book.tempCategory);

    return (
        <nav className='book-list-mini_navigation'>
            <div className='book-list-mini'>
                <div className='book-list-mini_wrapper'>
                    <span className='book-list-mini_category'>{categories}</span>
                    <span className='book-slash'>/</span>
                    <span className='book-list-mini_book-name'>{canUse && title}</span>
                </div>
            </div>
        </nav>
    );
}

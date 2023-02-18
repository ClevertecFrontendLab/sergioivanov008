import { useSelector } from 'react-redux';

import { BookCard } from '../book-card';

import './book-list.css';

export const BookList = () => {
    const books = useSelector(state => state.books.books);
    const listView = useSelector(state => state.bookList.listView);
    const curView = listView ? 'book-list_table' : 'book-list_list';

    return (
        <section className={curView}>
            { books.length > 0 &&
                books.map((el) => (
                    <BookCard book={el} key={el.id} />
                    ))
            }
        </section>
    );
}

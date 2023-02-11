// import { mockBooks } from '../../../mock-data/mock-books';
import { useSelector } from 'react-redux';

import { BookCard } from '../book-card';

import './book-list.css';

export const BookList = (props) => {
    const curView = props.listView ? 'book-list_table' : 'book-list_list';
    const mockBooks = useSelector(state => state.books.books)

    return (
        <section className={curView}>
            {
                mockBooks.map((el) => (
                    <BookCard book={el} key={el.id} />
                    ))

            }
        </section>
    );
}

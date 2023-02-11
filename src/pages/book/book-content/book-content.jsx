import { useParams } from 'react-router-dom';

import { mockBooks } from '../../../mock-data/mock-books';
import { BookDescription } from '../book-description';
import { BookInfo } from '../book-info';
import { BookListMini } from '../book-list-mini';
import { BookRating } from '../book-rating';
import { BookReview } from '../book-review';

import './book-content.css';

export const BookContent = () => {
    const {id} = useParams();
    const curBook = mockBooks.find((el) => el.id === id);
    const {rating} = curBook;

    return (
        <main className='book-content'>
            <BookListMini curBook={curBook} />
            <section className='book-content_section'>
                <BookDescription curBook={curBook} />
                <BookRating rating={rating} isNeedRating ={true} />
                <BookInfo />
                <BookReview />
            </section>
        </main>
    );
}

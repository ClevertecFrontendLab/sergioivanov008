import React from 'react';
import { useSelector } from 'react-redux';

import { BookDescription } from '../book-description';
import { BookInfo } from '../book-info';
import { BookListMini } from '../book-list-mini';
import { BookRating } from '../book-rating';
import { BookReview } from '../book-review';

import './book-content.css';

export const BookContent = () => {
    const canUse = useSelector(state => state.book.canUse);

    return (
        <main className='book-content'>
            {canUse &&
                <React.Fragment>
                    <BookListMini />
                    <section className='book-content_section'>
                        <BookDescription />
                        <BookRating />
                        <BookInfo />
                        <BookReview />
                    </section>
                </React.Fragment>
            }
        </main>
    );
}

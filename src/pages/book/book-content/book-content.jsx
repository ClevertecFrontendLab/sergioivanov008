import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getBookFetch } from '../../../redux/slices/book-slice';
import { BookDescription } from '../book-description';
import { BookInfo } from '../book-info';
import { BookListMini } from '../book-list-mini';
import { BookRating } from '../book-rating';
import { BookReview } from '../book-review';

import './book-content.css';

export const BookContent = () => {
    const canUse = useSelector(state => state.book.canUse);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getBookFetch(id));
    }, [dispatch, id]);

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

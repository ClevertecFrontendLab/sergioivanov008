import { useEffect, useRef } from 'react';
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
    const isRendered = useRef(false);
    const canUse = useSelector(state => state.book.canUse);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        if (isRendered.current === false) {
            isRendered.current = true;
            dispatch(getBookFetch(id));
        }
    }, [dispatch, isRendered, id]);

    return (
        <main className='book-content'>
            <BookListMini />
            {canUse &&
                <section className='book-content_section'>
                    <BookDescription />
                    <BookRating />
                    <BookInfo />
                    <BookReview />
                </section>
            }
        </main>
    );
}

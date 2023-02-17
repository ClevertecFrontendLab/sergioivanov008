import { useState } from 'react';
import { useSelector } from 'react-redux';

import { BOOK_FEEDBACKS, BTN_RATE } from '../../../constants/constants';
import { BookFeedback } from '../book-feedback';

import './book-review.css';

export const BookReview = () => {
    const [openFeedbacks, setOpenFeedbacks] = useState(true);

    const openFeed = () => {
        setOpenFeedbacks(!openFeedbacks);
    }

    const book = useSelector(state => state.book.book);
    const {comments} = book;
    const commentsCount = comments === null ? '' : comments.length;

    const arrowStyle = openFeedbacks ? 'book-review_header-3' : 'book-review_header-3 hidden';

    const feedbacksStyle = openFeedbacks ? 'book-feedback_wrapper' : 'book-feedback_wrapper hidden';

    return (
    <section className='book-review'>
        <div className='book-review_header'>
            <div className='book-review_header-1'>
                {BOOK_FEEDBACKS}
                <span className='book-review_header-2'>{commentsCount}</span>
            </div>
            <div
                className={arrowStyle}
                onClick={openFeed}
                data-test-id='button-hide-reviews'
                role='presentation' />
        </div>

        <div className={feedbacksStyle}>
            { comments &&
                comments.map((el) => (<BookFeedback feedback={el} key={el.id} />))
            }
        </div>

        <div
            className='book-review_btn'
            data-test-id='button-rating'>
                {BTN_RATE}
        </div>
    </section>
);
}

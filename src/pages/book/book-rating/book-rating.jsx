import { BOOK_RATING_NAME } from '../../../constants/constants';
import { BookContentName } from '../book-content-name';
import { BookContentRatingStars } from '../book-content-rating-stars';

import './book-rating.css';

export const BookRating = (props) => {
    const {rating, isNeedRating} = props;

    return (
    <section className='book-rating'>
        <BookContentName name={BOOK_RATING_NAME} />
        <div className='book-rating_wrapper'>
            <BookContentRatingStars rating={rating} isNeedRating={isNeedRating} />
        </div>
    </section>
);
}

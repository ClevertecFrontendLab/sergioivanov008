import { isItNumber } from '../../../functions/functions';

import './book-content-rating-stars.css';

export const BookContentRatingStars = (props) => {
    const {rating, isNeedRating} = props;
    const curRating = isItNumber(rating) ? Math.floor(rating) : 0;
    const ratingArr = [0, 0, 0, 0, 0]
        .fill(1, 0, curRating)
        .map((el, index) => ({'id': index, 'value': el}));

    const starStyle = (value) => `star ${value === 1 ? 'full' : 'empty'}`;

    return (
    <div className='book-rating_full'>
            <div className='book-content-rating-stars'>
                {ratingArr.map((el) => (
                    <div className={starStyle(el.value)} key={el.id} />))}
            </div>

            <div className='book-rating_score'>
                {isNeedRating ? rating : ''}
            </div>
        </div>
    );
};

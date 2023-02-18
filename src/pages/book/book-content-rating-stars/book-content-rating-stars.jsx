import emptyStarImg from '../../../assets/book-card/Icon_star.svg';
import fullStarImg from '../../../assets/book-card/Star 1.svg';

import './book-content-rating-stars.css';

export const BookContentRatingStars = (props) => {
    const {rating, isNeedRating} = props;
    const curRating = rating && rating !== 0 && Math.floor(rating);
    const workArr = [0, 0, 0, 0, 0].fill(1, 0, curRating);

    return (
    <div className='book-rating_full'>
            <div className='book-content-rating-stars'>
                {workArr.map((el) => <img src={el === 1 ? fullStarImg : emptyStarImg} className='star' alt={el === 1 ? 'full star' : 'empty star'} />)}
            </div>
            {isNeedRating ? (
                <div className='book-rating_score'>
                    {rating}
                </div> ) :
                 ''}
        </div>
);
}

import emptyStarImg from '../../../assets/book-card/Icon_star.svg';
import fullStarImg from '../../../assets/book-card/Star 1.svg';

import './book-content-rating-stars.css';

export const BookContentRatingStars = (props) => {
    const {rating, isNeedRating} = props;

    return (
    <div className='book-rating_full'>
            <div className='book-content-rating-stars'>
                <img src={fullStarImg} className='star' alt="full star" />
                <img src={fullStarImg} className='star' alt="full star" />
                <img src={fullStarImg} className='star' alt="full star" />
                <img src={fullStarImg} className='star' alt="full star" />
                <img src={emptyStarImg} className='star' alt="empty star" />
            </div>
            {isNeedRating ? (
                <div className='book-rating_score'>
                    {rating}
                </div> ) :
                 ''}
        </div>
);
}

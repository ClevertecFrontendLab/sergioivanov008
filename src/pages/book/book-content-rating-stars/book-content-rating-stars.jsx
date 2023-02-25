import './book-content-rating-stars.css';

export const BookContentRatingStars = (props) => {
    const {rating, isNeedRating} = props;
    const curRating = rating && rating !== 0 && Math.floor(rating);
    const workArr = [0, 0, 0, 0, 0]
        .fill(1, 0, curRating)
        .map((el, index) => ({'id': index, 'value': el}));

    return (
    <div className='book-rating_full'>
            <div className='book-content-rating-stars'>
                {workArr.map((el) => (
                    <div className={`star ${el.value === 1 ? 'full' : 'empty'}`} key={el.id} />))}
            </div>
            {isNeedRating ? (
                <div className='book-rating_score'>
                    {rating}
                </div> ) :
                 ''}
        </div>
);
}

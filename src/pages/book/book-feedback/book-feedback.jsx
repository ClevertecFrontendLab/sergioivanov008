import feedbackAvatar from '../../../assets/book-page/Ellipse 10.png';
import { getDateForFeedback } from '../../../functions/get-date-for-feedback';
import { BookContentRatingStars } from '../book-content-rating-stars';

import './book-feedback.css';

export const BookFeedback = (props) => {
    const {user, createdAt, text, rating} = props.feedback;
    const isNeedRating = rating ? true : false;

    const date = getDateForFeedback(createdAt);

    return (
        <div className='book-feedback'>
            <div className='feedback_info'>
                <img className='feedback_avatar' src={feedbackAvatar} alt="feedback avatar" />
                <div className='info_wrapper'>
                    <div className='feedback_name'>{user.firstName} {user.lastName}</div>
                    <div className='feedback_date'>{date}</div>
                </div>
            </div>
            <div className='feedback-rating_wrapper'>
                <BookContentRatingStars rating={rating} isNeedRating={isNeedRating} />
            </div>
            {text ?
                <div className='feedback_text'>{text}</div> : ''
            }
        </div>
    );
}

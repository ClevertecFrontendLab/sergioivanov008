import feedbackAvatar from '../../../assets/book-page/Ellipse 10.png';
import { BookContentRatingStars } from '../book-content-rating-stars';

import './book-feedback.css';

export const BookFeedback = (props) => {
    const {feedbackName, feedbackDate, feedbackText} = props.feedback;

    return (
        <div className='book-feedback'>
            <div className='feedback_info'>
                <img className='feedback_avatar' src={feedbackAvatar} alt="feedback avatar" />
                <div className='info_wrapper'>
                    <div className='feedback_name'>{feedbackName}</div>
                    <div className='feedback_date'>{feedbackDate}</div>
                </div>
            </div>
            <div className='feedback-rating_wrapper'>
                <BookContentRatingStars />
            </div>
            {feedbackText ?
                <div className='feedback_text'>{feedbackText}</div> : ''
            }
        </div>
    );
}

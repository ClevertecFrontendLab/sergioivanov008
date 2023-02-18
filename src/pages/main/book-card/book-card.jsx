import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import bookEmptyImg from '../../../assets/book-card/empty-image.png';
import { BTN_BOOK, HOST_URL, RATING_NONE } from '../../../constants/constants';
import { setTempCategory } from '../../../redux/slices/book-slice';
import { BookContentRatingStars } from '../../book/book-content-rating-stars';

import './book-card.css';

export const BookCard = (props) => {
    const {issueYear, rating, title, authors, image, categories, id} = props.book;
    const cuttingTitle = title.length > 54 ? `${title.slice(0,50)}...` : title;

    const dispatch = useDispatch();
    const setCategories = () => {
        dispatch(setTempCategory(categories[0]));
    }

    return (
        <Link to={`/books/all/${id}`} className='book-card' data-test-id='card' onClick={setCategories} >
            <figure className='book-card_image book-card_grid-1'>
                {
                    image === null
                        ? <img className='book-img' src={bookEmptyImg} alt="empty cover" />
                        : <img className='book-img' src={`${HOST_URL}${image.url}`} alt="book cover" />
                }
            </figure>
            <div className='book-stars book-card_grid-2'>
                {rating === null ? RATING_NONE : <BookContentRatingStars rating={rating} />}
            </div>
            <div className='book-name book-card_grid-3'>{cuttingTitle}</div>
            <div className='book-author book-card_grid-4'>{`${authors}, ${issueYear}`}</div>
            <div className='book-order book-card_grid-5'>{BTN_BOOK}</div>
        </Link>
    );
}

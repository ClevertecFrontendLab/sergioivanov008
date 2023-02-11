import { Link } from 'react-router-dom';

import bookEmptyImg from '../../../assets/book-card/empty-image.png';
import bookImg from '../../../assets/book-card/image.png';
import { BTN_BOOK } from '../../../constants/constants';
import { BookContentRatingStars } from '../../book/book-content-rating-stars';

import './book-card.css';

export const BookCard = (props) => {
    const {id, category, author, title, rating, year, coverImages} = props.book;
    const cuttingTitle = title.length > 54 ? `${title.slice(0,50)}...` : title;

    return (
        <Link to={`/book/${category}/${id}`} className='book-card' data-test-id='card'>
            <figure className='book-card_image book-card_grid-1'>
                {
                    coverImages.length === 0 ?
                        <img className='book-img' src={bookEmptyImg} alt="empty cover" />:
                        <img className='book-img' src={bookImg} alt="book cover" />
                }
            </figure>
            <div className='book-stars book-card_grid-2'>
                <BookContentRatingStars rating={rating} />
            </div>
            <div className='book-name book-card_grid-3'>{cuttingTitle}</div>
            <div className='book-author book-card_grid-4'>{`${author}, ${year}`}</div>
            <div className='book-order book-card_grid-5'>{BTN_BOOK}</div>
        </Link>
    );
}

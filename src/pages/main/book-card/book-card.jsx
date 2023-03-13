/* eslint-disable react/no-danger */
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import bookEmptyImg from '../../../assets/book-card/empty-image.png';
import { API, BTN_BOOK, RATING_NONE } from '../../../constants/constants';
import { getTitleWithHighlight } from '../../../functions/functions';
import { BookContentRatingStars } from '../../book/book-content-rating-stars';

import './book-card.css';

export const BookCard = (props) => {
    const { category } = useParams();

    const {issueYear, rating, title, authors, image, id} = props.book;

    const searchQuery = useSelector(state => state.bookList.searchQuery);

    const cuttingTitle = () => title.length > 58 ? `${title.slice(0,54)}...` : title;

    const bookTitle = () => searchQuery === ''
        ? cuttingTitle()
        : <div dangerouslySetInnerHTML={{ __html: getTitleWithHighlight(searchQuery, title)}} />;

    return (
        <Link to={`/books/${category}/${id}`} className='book-card' data-test-id='card' >
            <figure className='book-card_image book-card_grid-1'>
                {
                    image === null
                        ? <img className='book-img' src={bookEmptyImg} alt="empty cover" />
                        : <img className='book-img' src={`${API.host}${image.url}`} alt="book cover" />
                }
            </figure>
            <div className='book-stars book-card_grid-2'>
                {rating === null ? RATING_NONE : <BookContentRatingStars rating={rating} />}
            </div>
            <div className='book-name book-card_grid-3'>{bookTitle()}</div>
            <div className='book-author book-card_grid-4'>{`${authors}, ${issueYear}`}</div>
            <div className='book-order book-card_grid-5'>{BTN_BOOK}</div>
        </Link>
    );
}

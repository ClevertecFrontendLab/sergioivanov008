import { useSelector } from 'react-redux';

import { BOOK_DETAIL_CATEGORIES,
    BOOK_DETAIL_COVER,
    BOOK_DETAIL_FORMAT,
    BOOK_DETAIL_INFORMATION,
    BOOK_DETAIL_ISBN,
    BOOK_DETAIL_ISSUE_YEAR,
    BOOK_DETAIL_PAGES,
    BOOK_DETAIL_PRODUCER,
    BOOK_DETAIL_PUBLISH,
    BOOK_DETAIL_WEIGHT} from '../../../constants/constants';
import { BookContentName } from '../book-content-name';

import './book-info.css';

export const BookInfo = () => {
    const book = useSelector(state => state.book.book);
    const {publish, issueYear, pages, cover, format, weight, ISBN, producer, categories} = book;

    return (
        <section className='book-info'>
            <BookContentName name={BOOK_DETAIL_INFORMATION} />
            <div className='book-info_full'>
                <div className='book-info_left'>
                    <div className='book-info_stroke'>
                        <div className='stroke_key'>{BOOK_DETAIL_PUBLISH}</div>
                        <div className='stroke_value left'>{publish}</div>
                    </div>
                    <div className='book-info_stroke'>
                        <div className='stroke_key'>{BOOK_DETAIL_ISSUE_YEAR}</div>
                        <div className='stroke_value left'>{issueYear}</div>
                    </div>
                    <div className='book-info_stroke'>
                        <div className='stroke_key'>{BOOK_DETAIL_PAGES}</div>
                        <div className='stroke_value left'>{pages}</div>
                    </div>
                    <div className='book-info_stroke'>
                        <div className='stroke_key'>{BOOK_DETAIL_COVER}</div>
                        <div className='stroke_value left'>{cover}</div>
                    </div>
                    <div className='book-info_stroke'>
                        <div className='stroke_key'>{BOOK_DETAIL_FORMAT}</div>
                        <div className='stroke_value left'>{format}</div>
                    </div>
                </div>
                <div className='book-info_right'>
                    <div className='book-info_stroke'>
                        <div className='stroke_key'>{BOOK_DETAIL_CATEGORIES}</div>
                        <div className='stroke_value right'>{categories}</div>
                    </div>
                    <div className='book-info_stroke'>
                        <div className='stroke_key'>{BOOK_DETAIL_WEIGHT}</div>
                        <div className='stroke_value right'>{weight}</div>
                    </div>
                    <div className='book-info_stroke'>
                        <div className='stroke_key'>{BOOK_DETAIL_ISBN}</div>
                        <div className='stroke_value right'>{ISBN}</div>
                    </div>
                    <div className='book-info_stroke'>
                        <div className='stroke_key'>{BOOK_DETAIL_PRODUCER}</div>
                        <div className='stroke_value right'>{producer}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

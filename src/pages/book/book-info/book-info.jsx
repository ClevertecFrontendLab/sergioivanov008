import { useSelector } from 'react-redux';

import { BOOK_DETAIL_INFORMATION } from '../../../constants/constants';
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
                        <div className='stroke_key'>Издательство</div>
                        <div className='stroke_value left'>{publish}</div>
                    </div>
                    <div className='book-info_stroke'>
                        <div className='stroke_key'>Год издания</div>
                        <div className='stroke_value left'>{issueYear}</div>
                    </div>
                    <div className='book-info_stroke'>
                        <div className='stroke_key'>Страниц</div>
                        <div className='stroke_value left'>{pages}</div>
                    </div>
                    <div className='book-info_stroke'>
                        <div className='stroke_key'>Переплёт</div>
                        <div className='stroke_value left'>{cover}</div>
                    </div>
                    <div className='book-info_stroke'>
                        <div className='stroke_key'>Формат</div>
                        <div className='stroke_value left'>{format}</div>
                    </div>
                </div>
                <div className='book-info_right'>
                    <div className='book-info_stroke'>
                        <div className='stroke_key'>Жанр</div>
                        <div className='stroke_value right'>{categories}</div>
                    </div>
                    <div className='book-info_stroke'>
                        <div className='stroke_key'>Вес</div>
                        <div className='stroke_value right'>{weight}</div>
                    </div>
                    <div className='book-info_stroke'>
                        <div className='stroke_key'>ISBN</div>
                        <div className='stroke_value right'>{ISBN}</div>
                    </div>
                    <div className='book-info_stroke'>
                        <div className='stroke_key'>Изготовитель</div>
                        <div className='stroke_value right'>{producer}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

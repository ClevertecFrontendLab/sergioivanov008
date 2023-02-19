import { useSelector } from 'react-redux';

import bookCoverEmpty from '../../../assets/swiper-images/image-empty.png';
import { COMMON_ABOUT, COMMON_ORDER_BTN, HOST_URL } from '../../../constants/constants';
import { CoverSwiper } from '../../../cover-swiper';

import './book-description.css';

export const BookDescription = () => {
    const book = useSelector(state => state.book.book);
    const {images, title, authors, issueYear, description} = book;

    const arrCoverImages = images === null
        ? [{'img': bookCoverEmpty, 'id': 'tempId0'}]
        : images.map((el, index) => ({'img': `${HOST_URL}${el.url}`, 'id': `tempId${index}`}));

    const curAuthors = authors.join(', ').concat(', ');

    return (
        <section className='book-description'>
            <section className='book-swiper book-description_grid-1'>
                <CoverSwiper images={arrCoverImages} />
            </section>
            <section className='book-description_common book-description_grid-2'>
                <div className='common_name'>{title}</div>
                <div className='common_author'>{`${curAuthors}${issueYear}`}</div>
                <div className='common_order-btn'>{COMMON_ORDER_BTN}</div>
            </section>
            <section className='book-description_grid-3'>
                <div className='common_about'>{COMMON_ABOUT}</div>
                <div>
                    <div className='common_full-description'>{description}</div>
                </div>
            </section>
        </section>
    );
}

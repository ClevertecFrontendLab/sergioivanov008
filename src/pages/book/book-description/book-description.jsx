import bookCoverEmpty from '../../../assets/swiper-images/image-empty.png';
import { COMMON_ABOUT, COMMON_ORDER_BTN } from '../../../constants/constants';
import { CoverSwiper } from '../../../cover-swiper';

import './book-description.css';

export const BookDescription = (props) => {
    const {title, author, year, coverImages, commonFullDescription1, commonFullDescription2} = props.curBook;

    const arrCoverImages = coverImages.length === 0
        ? [{'img': bookCoverEmpty, 'id': 'tempId0'}]
        : coverImages.map((el, index) => ({'img': el, 'id': `tempId${index}`}))

    return (
        <section className='book-description'>
            <section className='book-swiper book-description_grid-1'>
                <CoverSwiper images={arrCoverImages} />
            </section>
            <section className='book-description_common book-description_grid-2'>
                <div className='common_name'>{title}</div>
                <div className='common_author'>{`${author}, ${year}`}</div>
                <div className='common_order-btn'>{COMMON_ORDER_BTN}</div>
            </section>
            <section className='book-description_grid-3'>
                <div className='common_about'>{COMMON_ABOUT}</div>
                <div>
                    <div className='common_full-description'>{commonFullDescription1}</div>
                    <div className='common_full-description part-two'>{commonFullDescription2}</div>
                </div>
            </section>
        </section>
    );
}

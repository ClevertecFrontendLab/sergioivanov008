import { BOOK_DETAIL_INFORMATION } from '../../../constants/constants';
import { BookContentName } from '../book-content-name';

import './book-info.css';

export const BookInfo = () => (
    <section className='book-info'>
        <BookContentName name={BOOK_DETAIL_INFORMATION} />
        <div className='book-info_full'>
            <div className='book-info_left'>
                <div className='book-info_stroke'>
                    <div className='stroke_key'>Издательство</div>
                    <div className='stroke_value left'>Питер</div>
                </div>
                <div className='book-info_stroke'>
                    <div className='stroke_key'>Год издания</div>
                    <div className='stroke_value left'>2019</div>
                </div>
                <div className='book-info_stroke'>
                    <div className='stroke_key'>Страниц</div>
                    <div className='stroke_value left'>288</div>
                </div>
                <div className='book-info_stroke'>
                    <div className='stroke_key'>Переплёт</div>
                    <div className='stroke_value left'>Мягкая обложка</div>
                </div>
                <div className='book-info_stroke'>
                    <div className='stroke_key'>Формат</div>
                    <div className='stroke_value left'>70x100</div>
                </div>
            </div>
            <div className='book-info_right'>
                <div className='book-info_stroke'>
                    <div className='stroke_key'>Жанр</div>
                    <div className='stroke_value right'>Компьютерная литература</div>
                </div>
                <div className='book-info_stroke'>
                    <div className='stroke_key'>Вес</div>
                    <div className='stroke_value right'>370 г</div>
                </div>
                <div className='book-info_stroke'>
                    <div className='stroke_key'>ISBN</div>
                    <div className='stroke_value right'>978-5-4461-0923-4</div>
                </div>
                <div className='book-info_stroke'>
                    <div className='stroke_key'>Изготовитель</div>
                    <div className='stroke_value right'>ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29</div>
                </div>
            </div>
        </div>
    </section>
);

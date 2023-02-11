import { useState } from 'react';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import './cover-swiper.css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination'


export const CoverSwiper = (props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='cover-swiper'>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                pagination={{ clickable: true }}
                modules={[FreeMode, Navigation, Thumbs, Pagination]}
                className="swiper-top"
                data-test-id='slide-big'
            >
                {
                    props.images.map((el) => (
                        <SwiperSlide key={el.id}>
                            <img src={el.img} alt="cover and pages" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            { props.images.length > 1 ?
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs, Pagination]}
                    className="swiper-bottom"
                >
                   {
                        props.images.map((el) => (
                            <SwiperSlide key={el.id}>
                                <img src={el.img} alt="cover and pages" data-test-id='slide-mini' />
                            </SwiperSlide>
                        ))
                    }
                </Swiper> :
                ''
            }
        </div>
    );
}

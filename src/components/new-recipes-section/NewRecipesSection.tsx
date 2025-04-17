import 'swiper/swiper-bundle.css';

import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { RecipeItemLook, SectionTitle } from '~/components';
import { NEW_RECIPES_DATA, TITLES } from '~/constants';

export function NewRecipesSection() {
    const swiperRef = useRef<SwiperRef | null>(null);

    return (
        <Flex direction='column' gap={{ base: '12px', xl: '24px' }} mb='40px'>
            <SectionTitle title={TITLES.newRecipes} />
            <Box position='relative'>
                <Box overflow={{ base: 'unset', xl: 'hidden' }}>
                    <Swiper
                        ref={swiperRef}
                        loop={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetween: '12px',
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: '12px',
                            },
                            1440: {
                                slidesPerView: 3,
                                spaceBetween: '12px',
                            },
                            1920: {
                                slidesPerView: 4,
                                spaceBetween: '24px',
                            },
                        }}
                    >
                        {NEW_RECIPES_DATA.map((el) => (
                            <SwiperSlide key={el.id}>
                                <RecipeItemLook data={el} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
                <IconButton
                    colorScheme='myBlack'
                    aria-label='new-recipes'
                    size='lg'
                    icon={<ArrowBackIcon boxSize='32px' />}
                    position='absolute'
                    zIndex={2}
                    top='147px'
                    left='-8px'
                    display={{ base: 'none', lg: 'block' }}
                    onClick={() => swiperRef.current?.swiper.slidePrev()}
                />
                <IconButton
                    colorScheme='myBlack'
                    aria-label='new-recipes'
                    size='lg'
                    icon={<ArrowForwardIcon boxSize='32px' />}
                    position='absolute'
                    zIndex={2}
                    top='147px'
                    right='-8px'
                    display={{ base: 'none', lg: 'block' }}
                    onClick={() => swiperRef.current?.swiper.slideNext()}
                />
            </Box>
        </Flex>
    );
}

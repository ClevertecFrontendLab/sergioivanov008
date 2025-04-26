import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { BreadcrumbComponent, NavComponent, NavFooter } from '~/components';
import { useAppSelector } from '~/store/hooks';
import { mainActions, mainSelector } from '~/store/slices/main-slice';

export function BurgerMenu() {
    const { isOpenBurger } = useAppSelector(mainSelector);
    const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');

    const dispatch = useDispatch();
    const nandlerMenuClose = () => {
        dispatch(mainActions.setIsOpenBurger(false));
    };

    return (
        <>
            <Box
                position='fixed'
                zIndex={10}
                top='64px'
                right={0}
                w='100vw'
                h='100vh'
                backdropFilter='blur(4px)'
                bg='rgba(0, 0, 0, 0.16)'
                display={isOpenBurger ? 'block' : 'none'}
                onClick={nandlerMenuClose}
            />
            <Flex
                data-test-id={isLargerThan1440 || isOpenBurger ? 'nav' : ''}
                display={isOpenBurger ? 'flex' : 'none'}
                position='absolute'
                zIndex={11}
                top='64px'
                right='8px'
                w='344px'
                h='calc(100vh - 60px - 84px)'
                bg='#fff'
                boxShadow='0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                borderRadius='0 0 12px 12px'
                padding='16px 20px 32px'
                direction='column'
                gap='14px'
            >
                <BreadcrumbComponent />
                <NavComponent isLeftNav={false} />
                <NavFooter />
            </Flex>
        </>
    );
}

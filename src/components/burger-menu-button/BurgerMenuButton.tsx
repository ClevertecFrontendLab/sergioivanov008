import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Flex, useMediaQuery } from '@chakra-ui/react';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { mainActions, mainSelector } from '~/store/slices/main-slice';

import { BurgerMenu } from '../burger-menu/BurgerMenu';

export function BurgerMenuButton() {
    const { isOpenBurger } = useAppSelector(mainSelector);
    const dispatch = useAppDispatch();
    const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');

    useEffect(() => {
        const closeBurgerMenu = () => {
            dispatch(mainActions.setIsOpenBurger(false));
            document.body.classList.remove('not-scrolled');
        };

        isLargerThan1440 && closeBurgerMenu();
    }, [dispatch, isLargerThan1440]);

    useEffect(() => {
        if (isOpenBurger) document.body.classList.add('not-scrolled');
        else document.body.classList.remove('not-scrolled');
    }, [isOpenBurger]);

    const handlerBurger = () => {
        dispatch(mainActions.setIsOpenBurger(!isOpenBurger));
    };

    return (
        <Flex boxSize={6} align='center' justify='center'>
            {isOpenBurger ? (
                <CloseIcon
                    data-test-id='close-icon'
                    boxSize={3}
                    cursor='pointer'
                    onClick={handlerBurger}
                />
            ) : (
                <HamburgerIcon
                    data-test-id='hamburger-icon'
                    boxSize={6}
                    cursor='pointer'
                    onClick={handlerBurger}
                />
            )}
            <BurgerMenu />
        </Flex>
    );
}

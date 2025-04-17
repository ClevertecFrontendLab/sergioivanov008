import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Flex, useMediaQuery } from '@chakra-ui/react';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { mainActions, mainSelector } from '~/store/slices/main-slice';

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

    const handlerBurger = () => {
        dispatch(mainActions.setIsOpenBurger(!isOpenBurger));
        document.body.classList.toggle('not-scrolled');
    };

    return (
        <Flex boxSize={6} align='center' justify='center'>
            {isOpenBurger ? (
                <CloseIcon boxSize={3} cursor='pointer' onClick={handlerBurger} />
            ) : (
                <HamburgerIcon boxSize={6} cursor='pointer' onClick={handlerBurger} />
            )}
        </Flex>
    );
}

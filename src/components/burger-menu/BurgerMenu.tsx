import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { mainActions, mainSelector } from '~/store/slices/main-slice';

export function BurgerMenu() {
    const { isOpenBurger } = useAppSelector(mainSelector);
    const dispatch = useAppDispatch();

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

import { Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router';

import { LogoIcon, LogoText } from '~/components';
import { useAppDispatch } from '~/store/hooks';
import { mainActions } from '~/store/slices/main-slice';

export function Logotype() {
    const dispatch = useAppDispatch();

    const nandlerLogoClick = () => {
        dispatch(mainActions.setIsOpenBurger(false));
    };

    return (
        <NavLink to='/' onClick={nandlerLogoClick}>
            <Flex
                gap={2}
                width={{
                    base: '32px',
                    md: '264px',
                }}
                align='flex-end'
            >
                <LogoIcon boxSize={8} />
                <LogoText
                    width='97px'
                    height='26px'
                    display={{
                        base: 'none',
                        md: 'block',
                    }}
                />
            </Flex>
        </NavLink>
    );
}

import { Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router';

import { LogoIcon, LogoText } from '~/components';

export function Logotype() {
    return (
        <NavLink to='/'>
            <Flex
                gap={2}
                width={{
                    base: '32px',
                    sm: '135px',
                    md: '308px',
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

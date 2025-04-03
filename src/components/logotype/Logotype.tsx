import { Flex } from '@chakra-ui/react';

import { LogoIcon, LogoText } from '~/components';

export function Logotype() {
    return (
        <Flex
            gap={2}
            alignItems='flex-end'
            width={{
                base: '32px',
                sm: '135px',
                md: '280px',
                lg: '280px',
                xl: '280px',
            }}
        >
            <LogoIcon boxSize={8} />
            <LogoText
                width='97px'
                height='26px'
                display={{
                    base: 'none',
                    sm: 'none',
                    md: 'block',
                    lg: 'block',
                }}
            />
        </Flex>
    );
}

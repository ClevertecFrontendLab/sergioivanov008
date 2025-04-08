import { Flex } from '@chakra-ui/react';

import { LogoIcon, LogoText } from '~/components';

export function Logotype() {
    return (
        <Flex
            gap={2}
            width={{
                base: '32px',
                sm: '135px',
                md: '308px',
            }}
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
    );
}

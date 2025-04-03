import { Flex } from '@chakra-ui/react';

import { HeaderContent, Logotype } from '~/components';

export function Header() {
    return (
        <Flex alignItems='center'>
            <Logotype />
            <HeaderContent />
        </Flex>
    );
}

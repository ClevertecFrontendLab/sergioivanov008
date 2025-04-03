import { Flex } from '@chakra-ui/react';

import { HeaderContent, Logotype } from '~/components';

export function Header() {
    return (
        <Flex align='center'>
            <Logotype />
            <HeaderContent />
        </Flex>
    );
}

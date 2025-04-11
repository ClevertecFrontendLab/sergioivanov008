import { Flex } from '@chakra-ui/react';

import { HeaderContent, Logotype } from '~/components';

export function Header() {
    return (
        <Flex align='center' data-test-id='header'>
            <Logotype />
            <HeaderContent />
        </Flex>
    );
}

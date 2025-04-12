import { Flex } from '@chakra-ui/react';

import { HeaderContent, Logotype } from '~/components';

export function Header() {
    return (
        <Flex w='100%' align='center' justify='space-between'>
            <Logotype />
            <HeaderContent />
        </Flex>
    );
}

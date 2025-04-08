import { Flex } from '@chakra-ui/react';

import { NavComponent, NavFooter } from '~/components';

export function Navigation() {
    return (
        <Flex direction='column' justify='space-between' h='100%' gap='10px'>
            <NavComponent />
            <NavFooter />
        </Flex>
    );
}

import { Flex } from '@chakra-ui/react';

import { AsideUserData, NavFooter } from '~/components';

export function Navigation() {
    return (
        <Flex direction='column' justify='space-between' h='100%'>
            <AsideUserData />
            <NavFooter />
        </Flex>
    );
}

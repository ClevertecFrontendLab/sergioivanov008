import { Flex } from '@chakra-ui/react';

import { AsideUserData } from '~/components';

export function Aside() {
    return (
        <Flex align='center' direction='column' justify='space-between' h='100%' pt={4}>
            <AsideUserData />
            <div>Button</div>
        </Flex>
    );
}

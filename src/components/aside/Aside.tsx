import { Flex } from '@chakra-ui/react';

import { AddRecipeButton, AsideUserData } from '~/components';

export function Aside() {
    return (
        <Flex align='center' direction='column' justify='space-between' h='100%' pt={4}>
            <AsideUserData />
            <AddRecipeButton />
        </Flex>
    );
}

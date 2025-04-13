import { Box, Flex } from '@chakra-ui/react';

import { AvatarContent, BreadcrumbComponent, BurgerMenu, HeaderUserData } from '~/components';
import { AVATAR_DATA } from '~/constants';

export function HeaderContent() {
    return (
        <Flex w='100%' alignItems='center' justify={{ base: 'flex-end', lg: 'space-between' }}>
            <BreadcrumbComponent />
            <Box display={{ base: 'none', lg: 'flex' }} w='400px'>
                <AvatarContent data={AVATAR_DATA} />
            </Box>
            <Flex gap={8} display={{ base: 'flex', lg: 'none' }}>
                <HeaderUserData />
                <BurgerMenu />
            </Flex>
        </Flex>
    );
}

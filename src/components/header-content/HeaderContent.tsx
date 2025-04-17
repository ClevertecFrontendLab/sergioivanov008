import { Box, Flex } from '@chakra-ui/react';

import { AvatarContent, BreadcrumbComponent, BurgerMenuButton, HeaderUserData } from '~/components';
import { AVATAR_DATA } from '~/constants';
import { useAppSelector } from '~/store/hooks';
import { mainSelector } from '~/store/slices/main-slice';

export function HeaderContent() {
    const { isOpenBurger } = useAppSelector(mainSelector);

    return (
        <Flex w='100%' alignItems='center' justify={{ base: 'flex-end', lg: 'space-between' }}>
            <Box display={{ base: 'none', lg: 'block' }}>
                <BreadcrumbComponent />
            </Box>
            <Box display={{ base: 'none', lg: 'flex' }} w='400px'>
                <AvatarContent data={AVATAR_DATA} />
            </Box>
            <Flex gap={8} display={{ base: 'flex', lg: 'none' }}>
                {!isOpenBurger && <HeaderUserData />}
                <BurgerMenuButton />
            </Flex>
        </Flex>
    );
}

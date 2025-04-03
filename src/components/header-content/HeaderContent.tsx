import { Flex } from '@chakra-ui/react';

import { AvatarContent, BreadcrumbComponent, BurgerMenu, HeaderUserData } from '~/components';

export function HeaderContent() {
    return (
        <Flex
            w='100%'
            alignItems='center'
            justify={{
                base: 'flex-end',
                sm: 'flex-end',
                md: 'flex-end',
                lg: 'space-between',
            }}
        >
            <BreadcrumbComponent />
            <AvatarContent />
            <Flex
                gap={8}
                display={{
                    base: 'flex',
                    sm: 'flex',
                    md: 'flex',
                    lg: 'none',
                }}
            >
                <HeaderUserData />
                <BurgerMenu />
            </Flex>
        </Flex>
    );
}

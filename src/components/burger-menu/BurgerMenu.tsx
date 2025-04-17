import { Box, Flex } from '@chakra-ui/react';

import { BreadcrumbComponent, NavComponent, NavFooter } from '~/components';

export function BurgerMenu() {
    return (
        <Box
            position='fixed'
            zIndex={10}
            top='64px'
            w='100vw'
            h='100vh'
            backdropFilter='blur(4px)'
            bg='rgba(0, 0, 0, 0.16)'
        >
            <Box w='100vw' h='100vh' position='relative'>
                <Flex
                    position='absolute'
                    zIndex={11}
                    top='0'
                    right='8px'
                    w='344px'
                    h='calc(100vh - 60px - 84px)'
                    bg='#fff'
                    boxShadow='0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                    borderRadius='0 0 12px 12px'
                    padding='16px 20px 32px'
                    direction='column'
                    gap='14px'
                >
                    <BreadcrumbComponent />
                    <NavComponent />
                    <NavFooter />
                </Flex>
            </Box>
        </Box>
    );
}

import { Flex } from '@chakra-ui/react';

import { MainHeader, NewRecipes } from '~/components';

export function MainPage() {
    return (
        <Flex
            gap={58}
            direction='column'
            pl={{ base: '16px', md: '20px', lg: '24px' }}
            pr={{ base: '16px', md: '20px', lg: '24px' }}
        >
            <MainHeader />
            <Flex gap={10} direction='column'>
                <NewRecipes />
                <Flex h='584px' backgroundColor='#ffa2a2'>
                    Tastyest section
                </Flex>
                <Flex h='308px' backgroundColor='#ffa2a2'>
                    Blogs section
                </Flex>
                <Flex h='288px' backgroundColor='#ffa2a2'>
                    Vegan section
                </Flex>
            </Flex>
        </Flex>
    );
}

import { Flex } from '@chakra-ui/react';

import { MainHeader } from '~/components';

export function MainPage() {
    return (
        <Flex gap={58} direction='column'>
            <MainHeader />
            <Flex gap={10} direction='column'>
                <Flex h='486px' backgroundColor='#ffa2a2'>
                    New recipe section
                </Flex>
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

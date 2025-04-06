import { Flex } from '@chakra-ui/react';

import { Blogs, MainHeaderSection, NewRecipes, Tastyest, Vegan } from '~/components';

export function MainPage() {
    return (
        <Flex
            gap={58}
            direction='column'
            pl={{ base: '16px', md: '20px', lg: '24px' }}
            pr={{ base: '16px', md: '20px', lg: '24px' }}
        >
            <MainHeaderSection />
            <Flex gap={10} direction='column'>
                <NewRecipes />
                <Tastyest />
                <Blogs />
                <Vegan />
            </Flex>
        </Flex>
    );
}

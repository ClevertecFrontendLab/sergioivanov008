import { Flex } from '@chakra-ui/react';

import {
    BlogsSection,
    NewRecipesSection,
    PageHeaderSection,
    TastyestSection,
    Vegan,
} from '~/components';

export function MainPage() {
    return (
        <Flex
            gap={58}
            direction='column'
            pl={{ base: '16px', md: '20px', lg: '24px' }}
            pr={{ base: '16px', md: '20px', lg: '24px' }}
        >
            <PageHeaderSection />
            <Flex gap={10} direction='column'>
                <NewRecipesSection />
                <TastyestSection />
                <BlogsSection />
                <Vegan />
            </Flex>
        </Flex>
    );
}

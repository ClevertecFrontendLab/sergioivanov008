import { Flex } from '@chakra-ui/react';

import {
    BlogsSection,
    NewRecipesSection,
    PageFooterSection,
    PageHeaderSection,
    TastyestSection,
} from '~/components';

export function MainPage() {
    return (
        <Flex
            direction='column'
            pl={{ base: '16px', md: '20px', lg: '24px' }}
            pr={{ base: '16px', md: '20px', lg: '24px' }}
        >
            <PageHeaderSection />
            <NewRecipesSection />
            <TastyestSection />
            <BlogsSection />
            <PageFooterSection />
        </Flex>
    );
}

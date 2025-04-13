import { Flex } from '@chakra-ui/react';

import {
    BlogsSection,
    JuiciestSection,
    NewRecipesSection,
    PageFooterSection,
    PageHeaderSection,
} from '~/components';

export function MainPage() {
    return (
        <Flex
            direction='column'
            pl={{ base: '16px', md: '20px', lg: '24px' }}
            pr={{ base: '16px', md: '20px', lg: '24px' }}
        >
            <PageHeaderSection page='home' />
            <NewRecipesSection />
            <JuiciestSection />
            <BlogsSection />
            <PageFooterSection page='vegan-cuisine' />
        </Flex>
    );
}

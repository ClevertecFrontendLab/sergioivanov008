import { Flex, Heading } from '@chakra-ui/react';

import { Filters } from '~/components';
import { TITLES } from '~/constants';

export function PageHeaderSection() {
    return (
        <Flex
            gap={{ base: '12px', lg: '32px' }}
            direction='column'
            align='center'
            mt={{ base: '16px', lg: '32px' }}
            mb={{ base: '32px', md: '38px', lg: '48px' }}
            mx='auto'
        >
            <Heading
                fontWeight={700}
                fontSize={{ base: '24px', lg: '48px' }}
                lineHeight={{ base: '133%', lg: '100%' }}
            >
                {TITLES.bonAppetit}
            </Heading>
            <Filters />
        </Flex>
    );
}

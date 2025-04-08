import { Flex, Heading } from '@chakra-ui/react';

import { Filters } from '~/components';
import { TITLES } from '~/constants';

export function PageHeaderSection() {
    return (
        <Flex
            gap={{ base: '16px', lg: '32px' }}
            direction='column'
            align='center'
            mt='32px'
            mb='48px'
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

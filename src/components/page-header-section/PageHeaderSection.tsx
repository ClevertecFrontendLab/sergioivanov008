import { Flex, Heading } from '@chakra-ui/react';

import { Filters } from '~/components';
import { TITLES } from '~/constants';

export function PageHeaderSection() {
    return (
        <Flex gap={8} direction='column' align='center' mb='32px'>
            <Heading fontWeight={700} fontSize={48} lineHeight='100%'>
                {TITLES.bonAppetit}
            </Heading>
            <Filters />
        </Flex>
    );
}

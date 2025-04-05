import { Flex, Heading } from '@chakra-ui/react';

import { Filters } from '~/components';
import { TITLES } from '~/constants';

export function MainHeader() {
    return (
        <Flex gap={8} direction='column' align='center'>
            <Heading fontWeight={700} fontSize={48} lineHeight='100%'>
                {TITLES.bonAppetit}
            </Heading>
            <Filters />
        </Flex>
    );
}

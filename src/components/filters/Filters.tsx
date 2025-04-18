import { Flex } from '@chakra-ui/react';

import { FilterButton, FilterSearch, FilterSelect, FilterSwitch } from '~/components';

export function Filters() {
    return (
        <Flex gap={4} direction='column'>
            <Flex gap={3} justify='center'>
                <FilterButton />
                <FilterSearch />
            </Flex>
            <Flex gap={4} justify='center' w='100%' display={{ base: 'none', lg: 'flex' }}>
                <FilterSwitch />
                <FilterSelect />
            </Flex>
        </Flex>
    );
}

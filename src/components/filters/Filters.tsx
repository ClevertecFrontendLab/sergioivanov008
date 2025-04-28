import { Flex } from '@chakra-ui/react';

import { FilterButton, FilterSearch, FilterSelectAllergen, FilterSwitch } from '~/components';

export function Filters() {
    return (
        <Flex gap={4} direction='column' w={{ base: '328px', md: '448px', lg: '518px' }}>
            <Flex gap={3} justify='center'>
                <FilterButton />
                <FilterSearch />
            </Flex>
            <Flex gap={4} align='center' w='100%' display={{ base: 'none', lg: 'flex' }}>
                <FilterSwitch dataTestId='allergens-switcher' />
                <FilterSelectAllergen keyFilter='allergens' isSideMenu={false} />
            </Flex>
        </Flex>
    );
}

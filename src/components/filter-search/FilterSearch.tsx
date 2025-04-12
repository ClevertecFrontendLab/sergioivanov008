import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import { TEXT } from '~/constants';

export function FilterSearch() {
    return (
        <InputGroup w={{ base: '284px', md: '404px', lg: '458px' }}>
            <Input
                placeholder={TEXT.searchPlaceholder}
                _placeholder={{ color: '#134b00' }}
                size={{ base: 'sm', lg: 'lg' }}
                borderRadius='6px'
            />
            <InputRightElement boxSize={{ base: '32px', lg: '48px' }}>
                <SearchIcon boxSize={{ base: '14px', lg: '18px' }} />
            </InputRightElement>
        </InputGroup>
    );
}

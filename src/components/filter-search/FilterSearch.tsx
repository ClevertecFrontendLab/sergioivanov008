import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

export function FilterSearch() {
    return (
        <InputGroup w={{ base: '284px', md: '404px', lg: '458px' }}>
            <Input placeholder='Название или ингредиент...' size={{ base: 'sm', lg: 'lg' }} />
            <InputRightElement boxSize={{ base: '32px', lg: '48px' }}>
                <SearchIcon boxSize={{ base: '14px', lg: '18px' }} />
            </InputRightElement>
        </InputGroup>
    );
}

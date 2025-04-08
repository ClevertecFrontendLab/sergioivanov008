import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

export function FilterSearch() {
    return (
        <InputGroup size={{ base: 'sm', lg: 'lg' }} w={{ base: '284px', md: '404px', lg: '458px' }}>
            <Input placeholder='Название или ингредиент...' />
            <InputRightElement>
                <SearchIcon />
            </InputRightElement>
        </InputGroup>
    );
}

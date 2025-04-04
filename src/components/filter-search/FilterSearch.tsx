import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

export function FilterSearch() {
    return (
        <InputGroup>
            <Input placeholder='Название или ингредиент...' size='lg' w='458px' />
            <InputRightElement>
                <SearchIcon />
            </InputRightElement>
        </InputGroup>
    );
}

import { Select } from '@chakra-ui/react';

export function FilterSelect() {
    return (
        <Select placeholder='Выберите из списка...' size='lg' w='234px'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
        </Select>
    );
}

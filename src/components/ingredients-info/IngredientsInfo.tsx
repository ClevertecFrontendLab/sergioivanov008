import {
    Flex,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react';
import { useState } from 'react';

import { IngredientsInfoPropsType } from '~/components/types';
import { INGREDIENTS_INFO_TEXT } from '~/constants';

export function IngredientsInfo({ portions, ingredients }: IngredientsInfoPropsType) {
    const [value, setValue] = useState(portions);
    const handleChange = (value: string) => setValue(Number(value));

    return (
        <TableContainer mx='auto' w={{ xl: '668px' }} mb='40px'>
            <Table variant='striped' colorScheme='gray'>
                <Thead>
                    <Tr>
                        <Th
                            fontWeight={700}
                            fontSize='12px'
                            lineHeight='133%'
                            letterSpacing='0.05em'
                            color='#2db100'
                        >
                            {INGREDIENTS_INFO_TEXT.titleLeft}
                        </Th>
                        <Th isNumeric>
                            <Flex gap='16px' align='center' justify='flex-end'>
                                <Text
                                    fontWeight={700}
                                    fontSize='12px'
                                    lineHeight='133%'
                                    letterSpacing='0.05em'
                                    color='#2db100'
                                >
                                    {INGREDIENTS_INFO_TEXT.titleRight}
                                </Text>
                                <NumberInput
                                    size='md'
                                    w='90px'
                                    defaultValue={value}
                                    min={1}
                                    max={20}
                                    onChange={handleChange}
                                >
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </Flex>
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {ingredients.map((el, index) => (
                        <Tr
                            key={index}
                            fontWeight='500'
                            fontSize='14px'
                            lineHeight='143%'
                            color='rgba(0, 0, 0, 0.92)'
                        >
                            <Td>{el.title}</Td>
                            <Td
                                isNumeric
                            >{`${(Number(el.count) / Number(portions)) * value} ${el.measureUnit}`}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}

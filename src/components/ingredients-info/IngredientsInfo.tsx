import {
    Box,
    Flex,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Table,
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
        <Box
            mx='auto'
            w={{ base: '328px', md: '604px', lg: '578px', xl: '668px' }}
            mb={{ base: '24px', lg: '40px' }}
        >
            <Table variant='striped' colorScheme='gray' w='100%'>
                <Thead>
                    <Tr>
                        <Th
                            fontWeight={700}
                            fontSize='12px'
                            lineHeight='133%'
                            letterSpacing='0.05em'
                            color='#2db100'
                            px='8px'
                            py='10px'
                        >
                            {INGREDIENTS_INFO_TEXT.titleLeft}
                        </Th>
                        <Th pr={0} px='12px' py='10px'>
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
                                        <NumberIncrementStepper data-test-id='increment-stepper' />
                                        <NumberDecrementStepper data-test-id='decrement-stepper' />
                                    </NumberInputStepper>
                                </NumberInput>
                            </Flex>
                        </Th>
                    </Tr>
                </Thead>
                <Tbody p={0}>
                    {ingredients.map((el, index) => (
                        <Tr
                            key={index}
                            fontWeight='500'
                            fontSize='14px'
                            lineHeight='143%'
                            color='rgba(0, 0, 0, 0.92)'
                        >
                            <Td px='8px' py='10px'>
                                {el.title}
                            </Td>
                            <Td
                                data-test-id={`ingredient-quantity-${index}`}
                                isNumeric
                                px='12px'
                                py='10px'
                            >
                                {`${(Number(el.count) / Number(portions)) * value} ${el.measureUnit}`}
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
}

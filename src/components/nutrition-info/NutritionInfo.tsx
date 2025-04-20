import { Card, CardBody, Flex, Text } from '@chakra-ui/react';

import { NutritionInfoPropsType, NutritionValueKeyType } from '~/components/types';
import { NUTRITION_INFO_TEXT } from '~/constants';

export function NutritionInfo({ data }: NutritionInfoPropsType) {
    return (
        <Flex direction='column' mx='auto' gap='20px' mb='40px'>
            <Text fontWeight={400} fontSize='14px' lineHeight='143%' color='rgba(0, 0, 0, 0.8)'>
                {NUTRITION_INFO_TEXT.title}
            </Text>
            <Flex direction='row' gap={{ base: '12px', xl: '24px' }}>
                {NUTRITION_INFO_TEXT.values.map((el) => (
                    <Card
                        key={el.id}
                        border='1px solid rgba(0, 0, 0, 0.08)'
                        borderRadius='16px'
                        p='16px'
                        w='149px'
                        h='136px'
                    >
                        <CardBody p={0}>
                            <Flex direction='column' gap='12px'>
                                <Text
                                    fontWeight={400}
                                    fontSize='14px'
                                    lineHeight='143%'
                                    textAlign='center'
                                    color='rgba(0, 0, 0, 0.48)'
                                >
                                    {el.title}
                                </Text>
                                <Text
                                    fontWeight={500}
                                    fontSize={{ xl: '36px' }}
                                    lineHeight={{ xl: '111%' }}
                                    textAlign='center'
                                    color='#134b00'
                                >
                                    {data[el.key as NutritionValueKeyType]}
                                </Text>
                                <Text
                                    fontWeight={600}
                                    fontSize={{ xl: '14px' }}
                                    lineHeight={{ xl: '143%' }}
                                    textAlign='center'
                                    color='rgba(0, 0, 0, 0.92)'
                                >
                                    {el.dimension}
                                </Text>
                            </Flex>
                        </CardBody>
                    </Card>
                ))}
            </Flex>
        </Flex>
    );
}

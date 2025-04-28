import { Card, CardBody, Flex, Text } from '@chakra-ui/react';

import { NutritionInfoPropsType, NutritionValueKeyType } from '~/components/types';
import { NUTRITION_INFO_TEXT } from '~/constants';

export function NutritionInfo({ data }: NutritionInfoPropsType) {
    return (
        <Flex direction='column' mx='auto' gap='20px' mb={{ base: '24px', lg: '40px' }}>
            <Text fontWeight={400} fontSize='14px' lineHeight='143%' color='rgba(0, 0, 0, 0.8)'>
                {NUTRITION_INFO_TEXT.title}
            </Text>
            <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: '12px', xl: '24px' }}>
                {NUTRITION_INFO_TEXT.values.map((el) => (
                    <Card
                        key={el.id}
                        border='1px solid rgba(0, 0, 0, 0.08)'
                        borderRadius='16px'
                        p='16px'
                        w={{ base: '328px', md: '173px', lg: '135px', xl: '149px' }}
                        h={{ base: '64px', md: '136px' }}
                    >
                        <CardBody p={0}>
                            <Flex
                                direction={{ base: 'row', md: 'column' }}
                                gap='12px'
                                justify={{ base: 'space-between', md: 'unset' }}
                                align={{ base: 'center', md: 'unset' }}
                            >
                                <Text
                                    fontWeight={400}
                                    fontSize='14px'
                                    lineHeight='143%'
                                    textAlign={{ base: 'unset', md: 'center' }}
                                    color='rgba(0, 0, 0, 0.48)'
                                    w={{ base: '40%', md: 'unset' }}
                                >
                                    {el.title}
                                </Text>
                                <Text
                                    fontWeight={500}
                                    fontSize={{ base: '24px', md: '36px' }}
                                    lineHeight={{ base: '133%', md: '111%' }}
                                    textAlign='center'
                                    color='#134b00'
                                    w={{ base: '30%', md: 'unset' }}
                                >
                                    {data[el.key as NutritionValueKeyType]}
                                </Text>
                                <Text
                                    fontWeight={600}
                                    fontSize={{ lg: '14px' }}
                                    lineHeight={{ lg: '143%' }}
                                    textAlign={{ base: 'unset', md: 'center' }}
                                    color='rgba(0, 0, 0, 0.92)'
                                    textTransform='uppercase'
                                    w={{ base: '20%', md: 'unset' }}
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

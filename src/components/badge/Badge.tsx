import { Flex, Image, Stack, Text } from '@chakra-ui/react';

import { CATEGORY_DB } from '~/constants';

import { BadgePropsType, CategoryKeyType } from '../types';

export function Badge({ category, color }: BadgePropsType) {
    return (
        <Stack spacing='8px' align='flex-start' wrap='wrap'>
            {category &&
                category.map((el, index) => {
                    const curItem = CATEGORY_DB[el as CategoryKeyType];

                    return (
                        <Flex
                            align='center'
                            gap={{ base: '4px', lg: '8px' }}
                            backgroundColor={color}
                            borderRadius='4px'
                            py='2px'
                            px={{ base: '4px', lg: '8px' }}
                            h='24px'
                            key={index}
                        >
                            <Image
                                boxSize='16px'
                                objectFit='cover'
                                src={curItem.image}
                                alt={curItem.category}
                            />
                            <Text
                                fontWeight={400}
                                fontSize={14}
                                lineHeight='143%'
                                whiteSpace='nowrap'
                            >
                                {curItem.category}
                            </Text>
                        </Flex>
                    );
                })}
        </Stack>
    );
}

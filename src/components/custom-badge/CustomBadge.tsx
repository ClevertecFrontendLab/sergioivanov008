import { Flex, Image, Text } from '@chakra-ui/react';

import { NAV_DATA } from '~/constants';

import { BadgePropsType } from '../types';

export function CustomBadge({ category, color }: BadgePropsType) {
    return (
        <Flex gap='8px' align='flex-start' wrap='wrap'>
            {category &&
                category.map((el, index) => {
                    const curItem = NAV_DATA.find((item) => item.categoryNav === el);

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
                                src={curItem?.image}
                                alt={curItem?.categoryView}
                            />
                            <Text
                                fontWeight={400}
                                fontSize={14}
                                lineHeight='143%'
                                whiteSpace='nowrap'
                            >
                                {curItem?.categoryView}
                            </Text>
                        </Flex>
                    );
                })}
        </Flex>
    );
}

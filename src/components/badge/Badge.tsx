import { Flex, Image, Text } from '@chakra-ui/react';

import { CATEGORY_DB } from '~/constants';

import { BadgePropsType } from '../types';

export function Badge({ type, color }: BadgePropsType) {
    return (
        <Flex
            align='center'
            gap={{ base: '4px', lg: '8px' }}
            backgroundColor={color}
            borderRadius='4px'
            py='2px'
            px={{ base: '4px', lg: '8px' }}
            h='24px'
        >
            <Image
                boxSize='16px'
                objectFit='cover'
                src={CATEGORY_DB[type].image}
                alt={CATEGORY_DB[type].category}
            />
            <Text fontWeight={400} fontSize={14} lineHeight='143%' whiteSpace='nowrap'>
                {CATEGORY_DB[type].category}
            </Text>
        </Flex>
    );
}

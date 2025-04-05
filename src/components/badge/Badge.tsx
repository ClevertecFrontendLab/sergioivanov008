import { Flex, Image, Text } from '@chakra-ui/react';

import { BADGE_STORE } from '~/constants';

import { BadgePropsType } from '../types';

export function Badge({ type, color }: BadgePropsType) {
    return (
        <Flex align='center' gap={2} backgroundColor={color} borderRadius={1} py='2px' px='8px'>
            <Image
                boxSize='24px'
                objectFit='cover'
                src={BADGE_STORE[type].image}
                alt={BADGE_STORE[type].category}
            />
            <Text fontWeight={400} fontSize={14} lineHeight='143%'>
                {BADGE_STORE[type].category}
            </Text>
        </Flex>
    );
}

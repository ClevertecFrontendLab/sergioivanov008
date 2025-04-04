import { Flex, Image, Text } from '@chakra-ui/react';

import { BADGE_STORE } from '~/constants';

import { BadgePropsType } from '../types';
import s from './Badge.module.css';

export function Badge({ type, color }: BadgePropsType) {
    return (
        <Flex align='center' gap={2} backgroundColor={color} className={s.badge}>
            <Image
                boxSize='24px'
                objectFit='cover'
                src={BADGE_STORE[type].image}
                alt={BADGE_STORE[type].category}
            />
            <Text className={s.text}>{BADGE_STORE[type].category}</Text>
        </Flex>
    );
}

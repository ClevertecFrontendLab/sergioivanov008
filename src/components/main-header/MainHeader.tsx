import { Flex, Text } from '@chakra-ui/react';

import { Filters } from '~/components';
import { TITLES } from '~/constants';

import s from './MainHeader.module.css';

export function MainHeader() {
    return (
        <Flex gap={8} direction='column' className={s.wrapper}>
            <Text className={s.title}>{TITLES.bonAppetit}</Text>
            <Filters />
        </Flex>
    );
}

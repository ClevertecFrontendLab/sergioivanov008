import { Flex, Text } from '@chakra-ui/react';

import { Filters } from '~/components';

import s from './MainHeader.module.css';

export function MainHeader() {
    return (
        <Flex gap={8} direction='column' className={s.wrapper}>
            <Text className={s.title}>Приятного аппетита!</Text>
            <Filters />
        </Flex>
    );
}

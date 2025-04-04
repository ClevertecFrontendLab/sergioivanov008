import { Box, Flex, Text } from '@chakra-ui/react';

import { CategoryItemPropsType } from '../types';
import s from './CategoryItem.module.css';

export function CategoryItem({ data }: CategoryItemPropsType) {
    return (
        <Flex gap={3} pt={1.5} pr={2} pb={1.5} pl={4} cursor='pointer' className={s.categoryItem}>
            <Flex boxSize={6} justify='flex-end'>
                <Box className={s.box}></Box>
            </Flex>
            <Text className={s.text}>{data.title}</Text>
        </Flex>
    );
}

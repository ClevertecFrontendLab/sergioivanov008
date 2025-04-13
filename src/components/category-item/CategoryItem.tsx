import { Box, Flex, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router';

import { CategoryItemPropsType } from '../types';
import s from './CategoryItem.module.css';

export function CategoryItem({ data, categoryNav }: CategoryItemPropsType) {
    const linkTo = `/${categoryNav}/${data.id}`;

    return (
        <NavLink
            to={linkTo}
            className={({ isActive }) => `${s.categoryItem} ${isActive ? s.active : ''}`}
        >
            <Flex gap={3} py={1.5} pr={2} pl={4} className={s.flex}>
                <Flex boxSize={6} justify='flex-end'>
                    <Box className={s.box} />
                </Flex>
                <Text className={s.text}>{data.title}</Text>
            </Flex>
        </NavLink>
    );
}

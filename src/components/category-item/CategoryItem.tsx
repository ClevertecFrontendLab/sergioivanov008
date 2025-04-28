import { Box, Flex, Text } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router';

import { useAppDispatch } from '~/store/hooks';
import { mainActions } from '~/store/slices/main-slice';

import { CategoryItemPropsType } from '../types';
import s from './CategoryItem.module.css';

export function CategoryItem({ data, categoryNav }: CategoryItemPropsType) {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const pathnameArr = location.pathname.split('/');
    const category = pathnameArr[1];
    const subcategory = pathnameArr[2];

    const linkTo = `/${categoryNav}/${data.subcategoryNav}`;
    const isActiveItem = categoryNav === category && data.subcategoryNav === subcategory;

    const nandlerMenuClose = () => {
        dispatch(mainActions.setIsOpenBurger(false));
        document.body.classList.remove('not-scrolled');
    };

    return (
        <NavLink
            data-test-id={isActiveItem ? `${subcategory}-active` : ''}
            to={linkTo}
            className={({ isActive }) => `${s.categoryItem} ${isActive ? s.active : ''}`}
            onClick={nandlerMenuClose}
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

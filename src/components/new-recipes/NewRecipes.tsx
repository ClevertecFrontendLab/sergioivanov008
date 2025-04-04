import { Flex, Text } from '@chakra-ui/react';

import { SliderItem } from '~/components';
import { SLIDER_DATA } from '~/constants';

import s from './NewRecipes.module.css';

export function NewRecipes() {
    return (
        <Flex direction='column' gap={6}>
            <Text className={s.text}>Новые рецепты</Text>
            <Flex gap={6} className={s.slider}>
                {SLIDER_DATA.map((el) => (
                    <SliderItem key={el.id} data={el} />
                ))}
            </Flex>
        </Flex>
    );
}

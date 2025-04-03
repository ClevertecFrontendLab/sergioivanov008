import { Flex, Text } from '@chakra-ui/react';

import { BigCustomIcon } from '~/components';
import { BTN_TEXT } from '~/constants';

import s from './AddRecipeButton.module.css';

export function AddRecipeButton() {
    return (
        <Flex boxSize={52} align='center' justify='center' className={s.wrapper}>
            <Flex boxSize={12} align='center' justify='center' className={s.center}>
                <BigCustomIcon iconType='addRecipe' props={{ boxSize: '24px' }} />
            </Flex>
            <Text className={s.text}>{BTN_TEXT.addRecipe}</Text>
        </Flex>
    );
}

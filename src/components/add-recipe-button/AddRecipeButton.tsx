import { Flex, Text } from '@chakra-ui/react';

import { CustomIcon24 } from '~/components';
import { BTN_TEXT } from '~/constants';

import s from './AddRecipeButton.module.css';

export function AddRecipeButton() {
    return (
        <Flex w='100%' justify='flex-end'>
            <Flex boxSize={52} align='center' justify='center' className={s.wrapper}>
                <Flex boxSize={12} align='center' justify='center' className={s.center}>
                    <CustomIcon24 iconType='addRecipe' props={{ boxSize: '24px' }} />
                </Flex>
                <Text className={s.text}>{BTN_TEXT.addRecipe}</Text>
            </Flex>
        </Flex>
    );
}

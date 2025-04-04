import { Flex, Text } from '@chakra-ui/react';

import { CustomIcon12 } from '~/components';
import { NAV_FOOTER } from '~/constants';

import s from './ExitButton.module.css';

export function ExitButton() {
    return (
        <Flex gap={1.5} cursor='pointer'>
            <CustomIcon12 props={{ boxSize: '12px' }} iconType='exit' />
            <Text className={s.btnText}>{NAV_FOOTER.btnText}</Text>
        </Flex>
    );
}

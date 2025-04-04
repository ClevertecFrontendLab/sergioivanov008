import { Flex, Text } from '@chakra-ui/react';

import { ExitButton } from '~/components';
import { NAV_FOOTER } from '~/constants';

import s from './NavFooter.module.css';

export function NavFooter() {
    return (
        <Flex gap={4} direction='column' align='flex-start' pl={6}>
            <Text className={s.textLight}>{NAV_FOOTER.textLight}</Text>
            <Text className={s.text}>{NAV_FOOTER.text}</Text>
            <ExitButton />
        </Flex>
    );
}

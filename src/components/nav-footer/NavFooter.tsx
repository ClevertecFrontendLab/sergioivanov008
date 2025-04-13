import { Flex, Text } from '@chakra-ui/react';

import { ExitButton } from '~/components';
import { NAV_FOOTER } from '~/constants';

export function NavFooter() {
    return (
        <Flex gap={4} direction='column' align='flex-start' pl={6}>
            <Text fontWeight={500} fontSize={12} lineHeight='133%' color='rgba(0, 0, 0, 0.24)'>
                {NAV_FOOTER.textLight}
            </Text>
            <Text
                fontWeight={400}
                fontSize={12}
                lineHeight='85%'
                color='rgba(0, 0, 0, 0.64)'
                whiteSpace='pre-line'
            >
                {NAV_FOOTER.text}
            </Text>
            <ExitButton />
        </Flex>
    );
}

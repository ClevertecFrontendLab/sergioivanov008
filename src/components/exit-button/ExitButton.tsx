import { Flex, Text } from '@chakra-ui/react';

import { CustomIcon12 } from '~/components';
import { NAV_FOOTER } from '~/constants';

export function ExitButton() {
    return (
        <Flex gap={1.5} cursor='pointer'>
            <CustomIcon12 props={{ boxSize: '12px' }} iconType='exit' />
            <Text fontWeight={600} fontSize={12} lineHeight='133%'>
                {NAV_FOOTER.btnText}
            </Text>
        </Flex>
    );
}

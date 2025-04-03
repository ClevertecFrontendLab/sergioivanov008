import { Flex } from '@chakra-ui/react';

import { CustomIcon } from '~/components';

export function AsideUserData() {
    return (
        <Flex gap={6} align='center' direction='column'>
            <CustomIcon props={{ boxSize: '16px' }} iconType='pin' value='185' />
            <CustomIcon props={{ boxSize: '16px' }} iconType='view' value='589' />
            <CustomIcon props={{ boxSize: '16px' }} iconType='like' value='587' />
        </Flex>
    );
}

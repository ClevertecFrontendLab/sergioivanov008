import { Flex } from '@chakra-ui/react';

import { CustomIcon } from '~/components';

export function HeaderUserData() {
    return (
        <Flex gap={4} align='center'>
            <CustomIcon props={{ boxSize: '12px' }} iconType='pin' value='185' />
            <CustomIcon props={{ boxSize: '12px' }} iconType='view' value='589' />
            <CustomIcon props={{ boxSize: '12px' }} iconType='like' value='587' />
        </Flex>
    );
}

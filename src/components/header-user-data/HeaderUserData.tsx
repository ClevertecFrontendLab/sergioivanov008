import { Flex } from '@chakra-ui/react';

import { CustomIcon12 } from '~/components';

export function HeaderUserData() {
    return (
        <Flex gap={4} align='center'>
            <CustomIcon12 props={{ boxSize: '12px' }} iconType='pin' value='185' />
            <CustomIcon12 props={{ boxSize: '12px' }} iconType='view' value='589' />
            <CustomIcon12 props={{ boxSize: '12px' }} iconType='like' value='587' />
        </Flex>
    );
}

import { Flex } from '@chakra-ui/react';

import { CustomIcon12 } from '~/components';

export function AsideUserData() {
    return (
        <Flex w='100%' justify='flex-end'>
            <Flex gap='40px' align='center' direction='column' w='208px'>
                <CustomIcon12 props={{ boxSize: '16px' }} iconType='pin' value='185' />
                <CustomIcon12 props={{ boxSize: '16px' }} iconType='view' value='589' />
                <CustomIcon12 props={{ boxSize: '16px' }} iconType='like' value='587' />
            </Flex>
        </Flex>
    );
}

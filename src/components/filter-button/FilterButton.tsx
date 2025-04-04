import { Flex } from '@chakra-ui/react';

import { CustomIcon24 } from '~/components';

import s from './FilterButton.module.css';

export function FilterButton() {
    return (
        <Flex align='center' justify='center' className={s.button}>
            <CustomIcon24 iconType='filter' props={{ boxSize: '24px' }} />
        </Flex>
    );
}

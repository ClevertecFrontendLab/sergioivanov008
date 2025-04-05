import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, IconButton } from '@chakra-ui/react';

import { ArrowButtonPropsType } from '../types';
import s from './ArrowButton.module.css';

export function ArrowButton({ to }: ArrowButtonPropsType) {
    const curStyle = `${s.wrapper} ${s[to]}`;

    return (
        <Box className={curStyle}>
            <IconButton
                colorScheme='black'
                aria-label=''
                size='lg'
                icon={<ArrowForwardIcon boxSize='32px' />}
            />
        </Box>
    );
}

import { IconButton } from '@chakra-ui/react';

import { CustomIcon24 } from '~/components';

export function FilterButton() {
    return (
        <IconButton
            colorScheme='myBlack'
            aria-label='new-recipes'
            size='lg'
            icon={<CustomIcon24 iconType='filter' props={{ boxSize: '32px' }} />}
            variant='outline'
        />
    );
}

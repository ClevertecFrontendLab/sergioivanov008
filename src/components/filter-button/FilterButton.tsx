import { IconButton } from '@chakra-ui/react';

import { CustomIcon24 } from '~/components';

export function FilterButton() {
    return (
        <IconButton
            colorScheme='myBlack'
            aria-label='new-recipes'
            size={{ base: 'sm', lg: 'lg' }}
            width={{ base: '32px', lg: '48px' }}
            icon={<CustomIcon24 iconType='filter' />}
            variant='outline'
            border='1px solid rgba(0, 0, 0, 0.48)'
            borderColor='rgba(0, 0, 0, 0.48)'
        />
    );
}

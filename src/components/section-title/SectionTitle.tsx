import { Heading } from '@chakra-ui/react';

import { SectionTitlePropsType } from '../types';

export function SectionTitle({ title }: SectionTitlePropsType) {
    return (
        <Heading
            fontWeight={{ base: '500' }}
            fontSize={{ base: '24px', lg: '36px', xl: '48px' }}
            lineHeight={{ base: '133%', lg: '111%', xl: '100%' }}
        >
            {title}
        </Heading>
    );
}

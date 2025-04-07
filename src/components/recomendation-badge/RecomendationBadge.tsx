import { Avatar, Box, Tag, TagLabel } from '@chakra-ui/react';

import { TEXT } from '~/constants';

import { RecomendationBadgePropsType } from '../types';

export function RecomendationBadge({ data }: RecomendationBadgePropsType) {
    return (
        <Box position='absolute' bottom='20px' left='24px' display={{ base: 'none', lg: 'block' }}>
            <Tag h='28px' bg='#d7ff94' px='8px' borderRadius='4px'>
                <Avatar src={data.image} size='2xs' name={data.name} ml={-1} mr={2} />
                <TagLabel>{`${data.name} ${TEXT.recommend}`}</TagLabel>
            </Tag>
        </Box>
    );
}

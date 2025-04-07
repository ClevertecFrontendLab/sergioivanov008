import { Avatar, Flex, Heading, Text } from '@chakra-ui/react';

import { AvatarContentPropsType } from '../types';

export function AvatarContent({ data }: AvatarContentPropsType) {
    return (
        <Flex gap={3} align='center'>
            <Avatar name={data.name} src={data.image} size={{ base: 'sm', lg: 'md' }} />
            <Flex direction='column' justify='space-between'>
                <Heading noOfLines={1} fontWeight={500} fontSize={18} lineHeight='156%'>
                    {data.name}
                </Heading>
                <Text
                    fontWeight={400}
                    fontSize={{ base: '12px', lg: '14px' }}
                    lineHeight={{ base: '133%', lg: '143%' }}
                >
                    {data.nickName}
                </Text>
            </Flex>
        </Flex>
    );
}

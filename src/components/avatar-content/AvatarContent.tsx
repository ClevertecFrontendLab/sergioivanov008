import { Avatar, Flex, Heading, Text } from '@chakra-ui/react';

import { AvatarContentPropsType } from '../types';

export function AvatarContent({ data }: AvatarContentPropsType) {
    return (
        <Flex gap={3} display={{ base: 'none', lg: 'flex' }}>
            <Avatar name={data.name} src={data.image} />
            <Flex direction='column' justify='space-between'>
                <Heading fontWeight={500} fontSize={18} lineHeight='156%'>
                    {data.name}
                </Heading>
                <Text fontWeight={400} fontSize={14} lineHeight='143%'>
                    {data.nickName}
                </Text>
            </Flex>
        </Flex>
    );
}

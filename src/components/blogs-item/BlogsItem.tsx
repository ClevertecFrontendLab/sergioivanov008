import { Card, CardBody, Stack, Text } from '@chakra-ui/react';

import { AvatarContent } from '~/components';

import { BlogsItemPropsType } from '../types';

export function BlogsItem({ data }: BlogsItemPropsType) {
    return (
        <Card
            direction='row'
            overflow='hidden'
            variant='outline'
            cursor='pointer'
            transition='0.2s'
            _hover={{
                boxShadow:
                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
            }}
        >
            <Stack pt='24px' pb='22px' px='24px' gap={0}>
                <CardBody p={0} gap={7}>
                    <AvatarContent data={data.avatarData} />
                    <Text mt='28px' noOfLines={3} fontWeight={400} fontSize={14} lineHeight='143%'>
                        {data.description}
                    </Text>
                </CardBody>
            </Stack>
        </Card>
    );
}

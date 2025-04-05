import { Card, CardBody, Stack, Text } from '@chakra-ui/react';

import { AvatarContent } from '~/components';

import { BlogsItemPropsType } from '../types';

export function BlogsItem({ data }: BlogsItemPropsType) {
    return (
        <Card direction='row' overflow='hidden' variant='outline'>
            <Stack py={5} px={4} gap={0}>
                <CardBody p={0} gap={7}>
                    <AvatarContent data={data.avatarData} />
                    <Text py='2' noOfLines={3} fontWeight={400} fontSize={14} lineHeight='143%'>
                        {data.description}
                    </Text>
                </CardBody>
            </Stack>
        </Card>
    );
}

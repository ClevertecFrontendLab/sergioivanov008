import { Card, CardBody, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import { Badge, RecipeStatistic } from '~/components';

import { RecipeItemPropsType } from '../types';

export function RecipeItemSimple({ data }: RecipeItemPropsType) {
    const { bookmarks, likes } = data;

    return (
        <Card
            overflow='hidden'
            variant='outline'
            cursor='pointer'
            transition='0.2s'
            _hover={{
                boxShadow:
                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
            }}
            h={{ base: 'unset', lg: '100%' }}
        >
            <Stack
                pt={{ base: '12px', lg: '16px', xl: '24px' }}
                pb={{ base: '12px', lg: '16px', xl: '20px' }}
                px={{ base: '12px', lg: '16px', xl: '24px' }}
                gap={0}
            >
                <CardBody p={0}>
                    <Flex direction='column' gap='24px'>
                        <Flex direction='column' gap='8px'>
                            <Heading
                                noOfLines={1}
                                fontWeight={{ base: '500' }}
                                fontSize={{ base: '16px', lg: '20px' }}
                                lineHeight={{ base: '150%', lg: '140%' }}
                            >
                                {data.title}
                            </Heading>
                            <Text noOfLines={3} fontWeight={400} fontSize='14px' lineHeight='143%'>
                                {data.description}
                            </Text>
                        </Flex>
                        <Flex justify='space-between'>
                            <Badge category={data.category} color='#ffffd3' />
                            <RecipeStatistic bookmarks={bookmarks} likes={likes} />
                        </Flex>
                    </Flex>
                </CardBody>
            </Stack>
        </Card>
    );
}

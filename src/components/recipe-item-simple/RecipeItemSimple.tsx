import { Card, CardBody, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import { Badge, CustomIcon12 } from '~/components';

import { RecipeItemPropsType } from '../types';

export function RecipeItemSimple({ data }: RecipeItemPropsType) {
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
        >
            <Stack pt={6} pb={5} px={6} gap={0}>
                <CardBody p={0}>
                    <Heading size='md' noOfLines={1}>
                        {data.title}
                    </Heading>
                    <Text mt='8px' mb='20px' noOfLines={3}>
                        {data.description}
                    </Text>
                    <Flex justify='space-between'>
                        <Badge type={data.badgeType} color='#ffffd3' />
                        {data.recipeProps && (
                            <Flex gap={2}>
                                {data.recipeProps.map((el) => (
                                    <CustomIcon12
                                        key={el.id}
                                        props={{ boxSize: '12px' }}
                                        iconType={el.type}
                                        value={el.value}
                                    />
                                ))}
                            </Flex>
                        )}
                    </Flex>
                </CardBody>
            </Stack>
        </Card>
    );
}

import { Box, Card, CardBody, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

import { Badge, CustomIcon12, RecomendationBadge } from '~/components';

import { RecipeItemPropsType } from '../types';

export function RecipeItemLook({ data }: RecipeItemPropsType) {
    return (
        <Card
            flexShrink={0}
            flexBasis={{ base: '158px', lg: '277px', xl: '322px' }}
            overflow='hidden'
            variant='outline'
            cursor='pointer'
            transition='0.2s'
            _hover={{
                boxShadow:
                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
            }}
        >
            <Box position='relative'>
                <Image objectFit='cover' w='100%' src={data.image} alt={data.title} />
                {data.recomendation && <RecomendationBadge data={data.recomendation} />}
            </Box>

            <Stack py={5} px={4} gap={0}>
                <CardBody p={0}>
                    <Heading size='md' noOfLines={1}>
                        {data.title}
                    </Heading>
                    <Text py='2' noOfLines={3}>
                        {data.description}
                    </Text>
                    <Flex justify='space-between'>
                        <Badge type={data.badgeType} color='#d7ff94' />
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

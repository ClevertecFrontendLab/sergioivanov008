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

            <Stack
                pt={{ base: '8px', lg: '24px' }}
                pb={{ base: '4px', lg: '20px' }}
                px={{ base: '8px', lg: '24px' }}
                gap={{ base: '20px', lg: '24px' }}
                w='100%'
            >
                <CardBody p={0}>
                    <Heading
                        noOfLines={{ base: 2, lg: 1 }}
                        fontWeight={{ base: '500' }}
                        fontSize={{ base: '16px', lg: '18px', xl: '20px' }}
                        lineHeight={{ base: '150%', lg: '156%', xl: '140%' }}
                        mb='8px'
                    >
                        {data.title}
                    </Heading>
                    <Text py='2' noOfLines={3} display={{ base: 'none', lg: 'block' }}>
                        {data.description}
                    </Text>
                    <Flex justify='space-between'>
                        <Box position={{ base: 'absolute', lg: 'relative' }} left='8px' top='8px'>
                            <Badge type={data.badgeType} color='#d7ff94' />
                        </Box>
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

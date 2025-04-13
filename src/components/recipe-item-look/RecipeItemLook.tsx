import {
    Box,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';

import { Badge, RecipeStatistic, RecomendationBadge } from '~/components';

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
                <Image
                    objectFit='cover'
                    w='100%'
                    h={{ base: '128px', lg: '230px' }}
                    src={data.image}
                    alt={data.title}
                />
                {data.recomendation && <RecomendationBadge data={data.recomendation} />}
            </Box>

            <Stack
                pt={{ base: '8px', lg: '12px', xl: '16px' }}
                pb={{ base: '4px', lg: '12px', xl: '20px' }}
                px={{ base: '8px', lg: '12px', xl: '24px' }}
                spacing={{ base: '8px', lg: '26px' }}
                w='100%'
            >
                <CardBody p={0}>
                    <Flex direction='column' gap='8px'>
                        <Heading
                            noOfLines={{ base: 2, lg: 1 }}
                            fontWeight={{ base: '500' }}
                            fontSize={{ base: '16px', lg: '18px', xl: '20px' }}
                            lineHeight={{ base: '150%', lg: '156%', xl: '140%' }}
                        >
                            {data.title}
                        </Heading>
                        <Box display={{ base: 'none', lg: 'block' }}>
                            <Text noOfLines={3} fontWeight={400} fontSize='14px' lineHeight='143%'>
                                {data.description}
                            </Text>
                        </Box>
                    </Flex>
                </CardBody>

                <CardFooter p={0} m={0}>
                    <Flex justify='space-between' w='100%'>
                        <Box
                            position={{ base: 'absolute', lg: 'relative' }}
                            left={{ base: '8px', lg: '0px' }}
                            top={{ base: '8px', lg: '0px' }}
                        >
                            <Badge type={data.badgeType} color='#d7ff94' />
                        </Box>
                        {data.recipeProps && <RecipeStatistic data={data.recipeProps} />}
                    </Flex>
                </CardFooter>
            </Stack>
        </Card>
    );
}

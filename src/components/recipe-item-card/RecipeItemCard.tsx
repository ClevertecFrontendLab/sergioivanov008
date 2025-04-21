import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';

import { Badge, CustomIcon12, RecipeStatistic, RecomendationBadge, TimeBadge } from '~/components';
import { BTN_TEXT } from '~/constants';

import { RecipeItemCardPropsType } from '../types';

export function RecipeItemCard({ data }: RecipeItemCardPropsType) {
    const { bookmarks, likes } = data;

    return (
        <Card mt='56px' mb='40px' direction='row' overflow='hidden' variant='outline' border='none'>
            <Box position='relative'>
                <Image
                    objectFit='cover'
                    maxW={{ base: '158px', lg: '346px', xl: '553px' }}
                    h={{ base: '128px', lg: '244px', xl: '410px' }}
                    borderRadius='8px'
                    src={data?.image}
                    alt={data?.title}
                />
                {data.recomendation && <RecomendationBadge data={data.recomendation} />}
            </Box>

            <Stack px={{ base: '8px', lg: '24px' }} spacing={{ base: '20px', lg: '24px' }} w='100%'>
                <CardBody p={0}>
                    <Flex
                        direction='column'
                        gap={{ base: '4px', md: '8px', lg: '24px', xl: '32px' }}
                    >
                        <Flex justify='space-between' align='center' h='24px' p={0}>
                            <Box
                                position={{ base: 'absolute', lg: 'relative' }}
                                left={{ base: '8px', lg: '0px' }}
                                top={{ base: '8px', lg: '0px' }}
                            >
                                <Badge category={data.category} color='#ffffd3' />
                            </Box>
                            <RecipeStatistic bookmarks={bookmarks} likes={likes} />
                        </Flex>

                        <Flex direction='column' gap={{ xl: '24px' }}>
                            <Heading
                                fontWeight={{ base: '500', xl: '700' }}
                                fontSize={{ base: '16px', lg: '20px', xl: '48px' }}
                                lineHeight={{ base: '150%', lg: '140%', xl: '100%' }}
                            >
                                {data?.title}
                            </Heading>
                            <Box display={{ base: 'none', lg: 'block' }}>
                                <Text fontWeight={400} fontSize='14px' lineHeight='143%'>
                                    {data?.description}
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                </CardBody>

                <CardFooter p={0}>
                    <Flex w='100%' justify='space-between' align='flex-end'>
                        <TimeBadge time={data.time} />
                        <Flex gap={{ xl: '16px' }}>
                            <Button
                                leftIcon={
                                    <CustomIcon12 iconType='like' props={{ boxSize: '16px' }} />
                                }
                                colorScheme='myBlack'
                                variant='outline'
                                color='black'
                                size={{ base: 'md', xl: 'lg' }}
                            >
                                {BTN_TEXT.rateRecipe}
                            </Button>
                            <Button
                                leftIcon={
                                    <CustomIcon12 iconType='pin' props={{ boxSize: '16px' }} />
                                }
                                colorScheme='myGreen'
                                variant='solid'
                                color='black'
                                size={{ base: 'md', xl: 'lg' }}
                            >
                                {BTN_TEXT.saveToBookmarks}
                            </Button>
                        </Flex>
                    </Flex>
                </CardFooter>
            </Stack>
        </Card>
    );
}

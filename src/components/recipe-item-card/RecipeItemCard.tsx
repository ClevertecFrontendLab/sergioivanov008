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

import {
    CustomBadge,
    CustomIcon12,
    RecipeStatistic,
    RecomendationBadge,
    TimeBadge,
} from '~/components';
import { BTN_TEXT } from '~/constants';

import { RecipeItemCardPropsType } from '../types';

export function RecipeItemCard({ data }: RecipeItemCardPropsType) {
    const { bookmarks, likes } = data;

    return (
        <Card mt='56px' mb='40px' direction='row' overflow='hidden' variant='outline' border='none'>
            <Box position='relative'>
                <Image
                    objectFit='cover'
                    maxW={{ base: '158px', lg: '353px', xl: '553px' }}
                    h={{ base: '128px', lg: '410px', xl: '410px' }}
                    borderRadius='8px'
                    src={data?.image}
                    alt={data?.title}
                />
                {data.recomendation && <RecomendationBadge data={data.recomendation} />}
            </Box>

            <Stack
                pl={{ base: '8px', lg: '24px' }}
                pr={0}
                spacing={{ base: '20px', lg: '24px' }}
                w='100%'
            >
                <CardBody p={0}>
                    <Flex
                        direction='column'
                        gap={{ base: '4px', md: '8px', lg: '24px', xl: '32px' }}
                    >
                        <Flex justify='space-between' align='flex-start' p={0}>
                            <CustomBadge category={data.category} color='#ffffd3' />

                            <RecipeStatistic bookmarks={bookmarks} likes={likes} />
                        </Flex>

                        <Flex direction='column' gap={{ lg: '24px' }}>
                            <Heading
                                fontWeight={{ base: '500', lg: '700' }}
                                fontSize={{ base: '16px', lg: '48px' }}
                                lineHeight={{ base: '150%', lg: '100%' }}
                            >
                                {data.title}
                            </Heading>

                            <Text fontWeight={400} fontSize='14px' lineHeight='143%'>
                                {data.description}
                            </Text>
                        </Flex>
                    </Flex>
                </CardBody>

                <CardFooter p={0}>
                    <Flex w='100%' justify='space-between' align='flex-end'>
                        <TimeBadge time={data.time} />
                        <Flex gap={{ base: '12px', xl: '16px' }}>
                            <Button
                                leftIcon={
                                    <CustomIcon12
                                        iconType='like'
                                        props={{ boxSize: { lg: '14px', xl: '16px' } }}
                                    />
                                }
                                colorScheme='myBlack'
                                variant='outline'
                                color='black'
                                size={{ base: 'md', lg: 'sm', xl: 'lg' }}
                            >
                                {BTN_TEXT.rateRecipe}
                            </Button>
                            <Button
                                leftIcon={
                                    <CustomIcon12
                                        iconType='pin'
                                        props={{ boxSize: { lg: '14px', xl: '16px' } }}
                                    />
                                }
                                colorScheme='myGreen'
                                variant='solid'
                                color='black'
                                size={{ base: 'md', lg: 'sm', xl: 'lg' }}
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

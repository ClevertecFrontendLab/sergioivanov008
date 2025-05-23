import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    IconButton,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { CustomBadge, CustomIcon12, RecipeStatistic, RecomendationBadge } from '~/components';
import { BTN_TEXT } from '~/constants';
import { useColorText } from '~/hooks/use-color-text';
import { useAppSelector } from '~/store/hooks';
import { mainSelector } from '~/store/slices/main-slice';

import { RecipeItemFullType, RecipeItemPropsType } from '../types';

export function RecipeItem({ data, index }: RecipeItemPropsType) {
    const { searchQuery } = useAppSelector(mainSelector);
    const colorText = useColorText(data.title, searchQuery);
    const navigate = useNavigate();
    const { bookmarks, likes } = data;

    const handlerClick = (el: RecipeItemFullType) => {
        navigate(`/${el.category[0]}/${el.subcategory[0]}/${el.id}`);
    };

    return (
        <Card
            data-test-id={`food-card-${index}`}
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
            <Box position='relative'>
                <Image
                    objectFit='cover'
                    maxW={{ base: '158px', lg: '346px' }}
                    h='100%'
                    src={data.image}
                    alt={data.title}
                />
                {data.recomendation && <RecomendationBadge data={data.recomendation} />}
            </Box>

            <Stack
                pt={{ base: '8px', lg: '20px' }}
                pb={{ base: '4px', lg: '20px' }}
                px={{ base: '8px', lg: '24px' }}
                spacing={{ base: '20px', lg: '24px' }}
                w='100%'
            >
                <CardBody p={0}>
                    <Flex direction='column' gap={{ base: '4px', md: '8px', lg: '24px' }}>
                        <Flex justify='space-between' align='flex-start' p={0}>
                            <Flex
                                position={{ base: 'absolute', lg: 'relative' }}
                                left={{ base: '8px', lg: '0px' }}
                                top={{ base: '8px', lg: '0px' }}
                                w={{ base: '150px', lg: 'unset' }}
                            >
                                <CustomBadge category={data.category} color='#ffffd3' />
                            </Flex>
                            <RecipeStatistic bookmarks={bookmarks} likes={likes} />
                        </Flex>

                        <Flex direction='column' gap='8px'>
                            <Heading
                                noOfLines={{ base: 2, lg: 1 }}
                                fontWeight={{ base: '500' }}
                                fontSize={{ base: '16px', lg: '20px' }}
                                lineHeight={{ base: '150%', lg: '140%' }}
                            >
                                {searchQuery ? colorText : data.title}
                            </Heading>
                            <Box display={{ base: 'none', lg: 'block' }}>
                                <Text
                                    noOfLines={3}
                                    fontWeight={400}
                                    fontSize='14px'
                                    lineHeight='143%'
                                >
                                    {data.description}
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                </CardBody>

                <CardFooter p={0} gap={2} justify='flex-end'>
                    <Button
                        leftIcon={<CustomIcon12 iconType='pin' />}
                        colorScheme='myBlack'
                        variant='outline'
                        size={{ base: 'xs', lg: 'sm' }}
                        px={{ base: '8px', xl: '12px' }}
                        display={{ base: 'none', lg: 'flex' }}
                    >
                        {BTN_TEXT.save}
                    </Button>
                    <IconButton
                        icon={<CustomIcon12 iconType='pin' />}
                        colorScheme='myBlack'
                        aria-label='new-recipes'
                        variant='outline'
                        size='xs'
                        display={{ base: 'flex', lg: 'none' }}
                    />
                    <Button
                        data-test-id={`card-link-${index}`}
                        colorScheme='myBlack'
                        variant='solid'
                        size={{ base: 'xs', lg: 'sm' }}
                        onClick={() => handlerClick(data)}
                    >
                        {BTN_TEXT.cook}
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    );
}

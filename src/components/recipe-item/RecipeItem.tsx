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

import { Badge, CustomIcon12, RecomendationBadge } from '~/components';
import { BTN_TEXT } from '~/constants';

import { RecipeItemPropsType } from '../types';

export function RecipeItem({ data }: RecipeItemPropsType) {
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
            <Box position='relative'>
                <Image
                    objectFit='cover'
                    maxW={{ base: '158px', lg: '346px' }}
                    src={data.image}
                    alt={data.title}
                />
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
                    <Flex
                        justify='space-between'
                        align='center'
                        h='24px'
                        pb={{ base: '0px', lg: '24px' }}
                    >
                        <Box position={{ base: 'absolute', lg: 'relative' }} left='8px'>
                            <Badge type={data.badgeType} color='#ffffd3' />
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
                    <Heading
                        noOfLines={1}
                        fontWeight={{ base: '500' }}
                        fontSize={{ base: '16px', lg: '20px' }}
                        lineHeight={{ base: '150%', lg: '140%' }}
                    >
                        {data.title}
                    </Heading>
                    <Text py='2' noOfLines={3} display={{ base: 'none', lg: 'block' }}>
                        {data.description}
                    </Text>
                </CardBody>

                <CardFooter p={0} gap={2} justify='flex-end'>
                    <Button
                        leftIcon={<CustomIcon12 iconType='pin' />}
                        colorScheme='myBlack'
                        variant='outline'
                        size={{ base: 'xs', lg: 'sm' }}
                        display={{ base: 'none', lg: 'block' }}
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
                    <Button colorScheme='myBlack' variant='solid' size={{ base: 'xs', lg: 'sm' }}>
                        {BTN_TEXT.cook}
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    );
}

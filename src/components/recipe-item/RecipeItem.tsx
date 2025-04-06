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
                <Image objectFit='cover' maxW='346px' src={data.image} alt={data.title} />
                {data.recomendation && <RecomendationBadge data={data.recomendation} />}
            </Box>

            <Stack py={5} px={4} gap={0}>
                <CardBody p={0}>
                    <Flex justify='space-between' pb='6'>
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
                    <Heading size='md' noOfLines={1}>
                        {data.title}
                    </Heading>
                    <Text py='2' noOfLines={3}>
                        {data.description}
                    </Text>
                </CardBody>

                <CardFooter p={0} gap={2} justify='flex-end'>
                    <Button
                        leftIcon={<CustomIcon12 iconType='pin' />}
                        colorScheme='myBlack'
                        variant='outline'
                        size='sm'
                    >
                        {BTN_TEXT.save}
                    </Button>
                    <Button colorScheme='myBlack' variant='solid' size='sm'>
                        {BTN_TEXT.cook}
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    );
}

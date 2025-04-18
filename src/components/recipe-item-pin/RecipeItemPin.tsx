import { Button, Card, CardBody, Flex, HStack, Image, Text } from '@chakra-ui/react';

import { BTN_TEXT, NAV_DATA } from '~/constants';

import { RecipeItemPropsType } from '../types';

export function RecipeItemPin({ data }: RecipeItemPropsType) {
    const curItem = NAV_DATA.find((item) => item.categoryNav === data.category[0]);

    return (
        <Card
            overflow='hidden'
            variant='outline'
            cursor='pointer'
            h={{ base: '52px', xl: '56px' }}
            transition='0.2s'
            _hover={{
                boxShadow:
                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
            }}
        >
            <HStack py={{ base: '10px', xl: '12px' }} px={{ base: '12px', xl: '24px' }} gap={2}>
                <CardBody p={0}>
                    <Flex align='center' gap={3}>
                        <Image
                            boxSize='24px'
                            objectFit='cover'
                            src={curItem?.image}
                            alt={curItem?.categoryView}
                        />
                        <Text
                            noOfLines={1}
                            fontWeight={500}
                            fontSize={{ md: '16px', lg: '18px', xl: '20px' }}
                            lineHeight={{ md: '150%', lg: '156%', xl: '140%' }}
                        >
                            {data.title}
                        </Text>
                    </Flex>
                </CardBody>
                <Button
                    colorScheme='myGreenButton'
                    variant='outline'
                    size='sm'
                    px={{ base: '8px', xl: '12px' }}
                >
                    {BTN_TEXT.cook}
                </Button>
            </HStack>
        </Card>
    );
}

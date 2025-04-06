import { Button, Card, CardBody, Flex, HStack, Image, Text } from '@chakra-ui/react';

import { BTN_TEXT, CATEGORY_DB } from '~/constants';

import { RecipeItemPropsType } from '../types';

export function RecipeItemPin({ data }: RecipeItemPropsType) {
    return (
        <Card
            overflow='hidden'
            variant='outline'
            cursor='pointer'
            h='56px'
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
                            src={CATEGORY_DB[data.badgeType].image}
                            alt={CATEGORY_DB[data.badgeType].category}
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
                <Button colorScheme='myGreenButton' variant='outline' size='sm'>
                    {BTN_TEXT.save}
                </Button>
            </HStack>
        </Card>
    );
}

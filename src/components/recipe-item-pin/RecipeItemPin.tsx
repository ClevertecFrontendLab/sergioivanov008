import { Button, Card, CardBody, Flex, HStack, Image, Text } from '@chakra-ui/react';

import { BADGE_STORE, BTN_TEXT } from '~/constants';

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
            <HStack py={3} px={6} gap={0}>
                <CardBody p={0}>
                    <Flex align='center' gap={3}>
                        <Image
                            boxSize='24px'
                            objectFit='cover'
                            src={BADGE_STORE[data.badgeType].image}
                            alt={BADGE_STORE[data.badgeType].category}
                        />
                        <Text noOfLines={1} fontWeight={500} fontSize={20} lineHeight='140%'>
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

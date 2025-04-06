import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, SimpleGrid } from '@chakra-ui/react';

import { RecipeItem } from '~/components';
import { BTN_TEXT, TASTYEST_DATA, TITLES } from '~/constants';

export function TastyestSection() {
    return (
        <Flex direction='column' gap={6} mb='40px'>
            <Flex justify='space-between' align='center'>
                <Heading fontWeight={500} fontSize={48} lineHeight='100%'>
                    {TITLES.tastyest}
                </Heading>
                <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme='myGreen'
                    variant='solid'
                    color='black'
                    size='lg'
                >
                    {BTN_TEXT.allSelection}
                </Button>
            </Flex>
            <SimpleGrid columns={2} spacing={6}>
                {TASTYEST_DATA.map((el) => (
                    <RecipeItem key={el.id} data={el} />
                ))}
            </SimpleGrid>
        </Flex>
    );
}

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, SimpleGrid } from '@chakra-ui/react';

import { RecipeItem } from '~/components';
import { BTN_TEXT, TASTYEST_DATA, TITLES } from '~/constants';

export function TastyestSection() {
    return (
        <Flex direction='column' gap={6} mb='40px'>
            <Flex justify='space-between' align='center'>
                <Heading
                    fontWeight={{ base: '500' }}
                    fontSize={{ base: '24px', lg: '36px', xl: '48px' }}
                    lineHeight={{ base: '133%', lg: '111%', xl: '100%' }}
                >
                    {TITLES.tastyest}
                </Heading>
                <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme='myGreen'
                    variant='solid'
                    color='black'
                    size={{ base: 'md', lg: 'lg' }}
                >
                    {BTN_TEXT.allSelection}
                </Button>
            </Flex>
            <SimpleGrid
                columns={{ base: 1, md: 2, lg: 1, xl: 2 }}
                spacing={{ base: '12px', md: '16px', xl: '24px' }}
            >
                {TASTYEST_DATA.map((el) => (
                    <RecipeItem key={el.id} data={el} />
                ))}
            </SimpleGrid>
        </Flex>
    );
}

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Grid, GridItem, Heading, SimpleGrid } from '@chakra-ui/react';

import { RecipeItem } from '~/components';
import { BTN_TEXT, TASTYEST_DATA, TITLES } from '~/constants';

export function TastyestSection() {
    return (
        <Grid
            mx='auto'
            w='100%'
            gap={{ base: '12px', lg: '16px', xl: '24px' }}
            mb='40px'
            templateAreas={{
                base: `"one"
                     "three"
                     "two"`,
                lg: `"one two"
                     "three three"`,
            }}
            gridTemplateRows={{
                base: 'auto auto auto',
                lg: 'auto auto',
            }}
            gridTemplateColumns={{
                base: '1fr',
                lg: '1fr 1fr',
            }}
        >
            <GridItem area='one'>
                <Heading
                    fontWeight={{ base: '500' }}
                    fontSize={{ base: '24px', lg: '36px', xl: '48px' }}
                    lineHeight={{ base: '133%', lg: '111%', xl: '100%' }}
                >
                    {TITLES.tastyest}
                </Heading>
            </GridItem>
            <GridItem area='two' justifySelf={{ base: 'center', lg: 'flex-end' }}>
                <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme='myGreen'
                    variant='solid'
                    color='black'
                    size={{ base: 'md', lg: 'lg' }}
                >
                    {BTN_TEXT.allSelection}
                </Button>
            </GridItem>
            <GridItem area='three'>
                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 1, xl: 2 }}
                    spacing={{ base: '12px', md: '16px', xl: '24px' }}
                >
                    {TASTYEST_DATA.map((el) => (
                        <RecipeItem key={el.id} data={el} />
                    ))}
                </SimpleGrid>
            </GridItem>
        </Grid>
    );
}

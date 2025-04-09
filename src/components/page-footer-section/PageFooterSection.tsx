import { Flex, Grid, GridItem, Text } from '@chakra-ui/react';

import { RecipeItemPin, RecipeItemSimple, SectionTitle } from '~/components';
import { MAIN_PIN_DATA, TEXT, TITLES, VEGAN_DATA } from '~/constants';

export function PageFooterSection() {
    return (
        <Grid
            mx='auto'
            w='100%'
            gridRowGap={{ base: '8px', lg: '32px', xl: '24px' }}
            gridColumnGap={{ base: '8px', lg: '16px', xl: '24px' }}
            templateAreas={{
                base: `"one"
                     "two"
                     "three"
                     "four"
                     "five"`,
                md: `"one one one"
                     "two two two"
                     "three four five"`,
                lg: `"one two two"
                     "three four five"`,
                xl: `"one one two"
                     "three four five"`,
            }}
            gridTemplateRows={{
                base: 'auto auto auto auto auto',
                md: 'auto auto auto',
                lg: 'auto auto',
                xl: 'auto auto',
            }}
            gridTemplateColumns={{
                base: '1fr',
                md: '1fr 1fr 1fr',
                lg: '1fr 1fr 1fr',
                xl: '1fr 1fr 2fr',
            }}
            mb='16px'
        >
            <GridItem area='one'>
                <SectionTitle title={TITLES.vegan} />
            </GridItem>
            <GridItem area='two'>
                <Text
                    noOfLines={{ base: 4, md: 2, lg: 3, xl: 2 }}
                    fontWeight={500}
                    fontSize={16}
                    lineHeight='150%'
                    color='rgba(0, 0, 0, 0.64)'
                >
                    {TEXT.vegan}
                </Text>
            </GridItem>
            <GridItem area='three'>
                <RecipeItemSimple data={VEGAN_DATA[0]} />
            </GridItem>
            <GridItem area='four'>
                <RecipeItemSimple data={VEGAN_DATA[1]} />
            </GridItem>
            <GridItem area='five'>
                <Flex direction='column' justify='space-between' h='100%'>
                    {MAIN_PIN_DATA.map((el) => (
                        <RecipeItemPin key={el.id} data={el} />
                    ))}
                </Flex>
            </GridItem>
        </Grid>
    );
}

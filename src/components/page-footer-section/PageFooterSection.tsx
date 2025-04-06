import { Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';

import { RecipeItemPin, RecipeItemSimple } from '~/components';
import { MAIN_PIN_DATA, TEXT, TITLES, VEGAN_DATA } from '~/constants';

export function PageFooterSection() {
    return (
        <Grid
            mx='auto'
            w='100%'
            gap={6}
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
                <Heading fontWeight={500} fontSize={48} lineHeight='100%'>
                    {TITLES.vegan}
                </Heading>
            </GridItem>
            <GridItem area='two'>
                <Text
                    noOfLines={2}
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
                <Stack>
                    {MAIN_PIN_DATA.map((el) => (
                        <RecipeItemPin key={el.id} data={el} />
                    ))}
                </Stack>
            </GridItem>
        </Grid>
    );
}

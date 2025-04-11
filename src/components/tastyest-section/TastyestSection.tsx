import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Grid, GridItem } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { RecipesGrid, SectionTitle } from '~/components';
import { BTN_TEXT, TASTYEST_DATA, TITLES } from '~/constants';

export function TastyestSection() {
    const navigate = useNavigate();

    return (
        <Grid
            mx='auto'
            w='100%'
            gap={{ base: '12px', lg: '16px', xl: '24px' }}
            mb='32px'
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
                <SectionTitle title={TITLES.tastyest} />
            </GridItem>
            <GridItem area='two' justifySelf={{ base: 'center', lg: 'flex-end' }}>
                <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme='myGreen'
                    variant='solid'
                    color='black'
                    size={{ base: 'md', xl: 'lg' }}
                    onClick={() => navigate('/tastyest')}
                >
                    {BTN_TEXT.allSelection}
                </Button>
            </GridItem>
            <GridItem area='three'>
                <RecipesGrid data={TASTYEST_DATA} />
            </GridItem>
        </Grid>
    );
}

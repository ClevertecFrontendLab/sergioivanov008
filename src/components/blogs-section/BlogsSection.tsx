import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';

import { BlogsItem } from '~/components';
import { BLOGS_DATA, BTN_TEXT, TITLES } from '~/constants';

export function BlogsSection() {
    return (
        <Grid
            mx='auto'
            w='100%'
            gap={{ base: '12px', lg: '16px', xl: '24px' }}
            bg='#c4ff61'
            p={{ base: '12px', lg: '24px' }}
            mb='40px'
            templateAreas={{
                base: `"one"
                     "three"
                     "two"`,
                lg: `"one one one two two two"
                     "three three three three three three"`,
            }}
            gridTemplateRows={{
                base: 'auto auto auto',
                lg: 'auto auto',
            }}
            gridTemplateColumns={{
                base: '1fr',
                lg: '1fr 1fr 1fr 1fr 1fr 1fr',
            }}
        >
            <GridItem area='one'>
                <Heading
                    fontWeight={{ base: '500' }}
                    fontSize={{ base: '24px', lg: '36px', xl: '48px' }}
                    lineHeight={{ base: '133%', lg: '111%', xl: '100%' }}
                >
                    {TITLES.blogs}
                </Heading>
            </GridItem>
            <GridItem area='two' justifySelf={{ base: 'center', lg: 'flex-end' }}>
                <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme='myGreen'
                    variant='ghost'
                    color='black'
                    size='lg'
                    h={{ base: '40px', lg: '48px' }}
                >
                    {BTN_TEXT.allSelection}
                </Button>
            </GridItem>
            <GridItem area='three'>
                <Flex gap={{ base: '12px', lg: '16px' }} direction={{ base: 'column', md: 'row' }}>
                    {BLOGS_DATA.map((el) => (
                        <BlogsItem key={el.id} data={el} />
                    ))}
                </Flex>
            </GridItem>
        </Grid>
    );
}

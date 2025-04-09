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
            mb={{ base: '40px', lg: '64px' }}
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
                    fontWeight={{ base: '500', xl: '400' }}
                    fontSize={{ base: '24px', lg: '30px', xl: '36px' }}
                    lineHeight={{ base: '133%', lg: '120%', xl: '111%' }}
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
                    size={{ base: 'md', xl: 'lg' }}
                >
                    {BTN_TEXT.allAuthors}
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

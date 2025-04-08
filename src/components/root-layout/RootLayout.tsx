import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { Aside, Footer, Header, Navigation } from '~/components';

import s from './RootLayout.module.css';

export function RootLayout() {
    return (
        <Grid
            mx='auto'
            templateAreas={{
                base: `"header"
                     "main"
                     "footer"`,
                lg: `"header header header"
                     "nav main aside"`,
            }}
            gridTemplateRows={{ base: '64px 1fr 84px', lg: '80px 1fr' }}
            gridTemplateColumns={{ base: '1fr', lg: '256px 1fr 256px' }}
        >
            <GridItem
                area='header'
                bg='myColor.yellow'
                height={{
                    base: '64px',
                    lg: '80px',
                }}
                pl='4'
                pr='9'
                pt='4'
                pb='4'
                className={s.headerComponent}
            >
                <Header />
            </GridItem>
            <GridItem
                area='nav'
                display={{ base: 'none', lg: 'block' }}
                pt={6}
                pb={8}
                className={s.navComponent}
            >
                <Navigation />
            </GridItem>
            <GridItem area='main' overflow='hidden'>
                <Outlet />
            </GridItem>
            <GridItem
                area='aside'
                display={{ base: 'none', lg: 'block' }}
                pt={6}
                className={s.asideComponent}
            >
                <Aside />
            </GridItem>
            <GridItem
                area='footer'
                bg='myColor.yellow'
                display={{ base: 'block', lg: 'none' }}
                className={s.footerComponent}
            >
                <Footer />
            </GridItem>
        </Grid>
    );
}

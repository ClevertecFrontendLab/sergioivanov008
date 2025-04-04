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
                sm: `"header"
                     "main"
                     "footer"`,
                md: `"header"
                     "main"
                     "footer"`,
                lg: `"header header header"
                     "nav main aside"`,
            }}
            gridTemplateRows={{
                base: '64px 1fr 84px',
                sm: '64px 1fr 84px',
                md: '64px 1fr 84px',
                lg: '80px 1fr',
            }}
            gridTemplateColumns={{
                base: '1fr',
                sm: '1fr',
                md: '1fr',
                lg: '256px 1fr 256px',
            }}
            h='100vh'
            color='blackAlpha.700'
            gridColumnGap='24px'
        >
            <GridItem
                area='header'
                bg='myColor.yellow'
                height={{
                    base: '64px',
                    sm: '64px',
                    md: '64px',
                    lg: '80px',
                }}
                pl='4'
                pr='8'
                pt='4'
                pb='4'
                className={s.headerComponent}
            >
                <Header />
            </GridItem>
            <GridItem
                area='nav'
                display={{
                    base: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'block',
                }}
                className={s.navComponent}
                pt={6}
                pb={8}
                pl={6}
                pr={6}
            >
                <Navigation />
            </GridItem>
            <GridItem area='main' bg='green.300'>
                <Outlet />
            </GridItem>
            <GridItem
                area='aside'
                display={{
                    base: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'block',
                }}
                className={s.asideComponent}
            >
                <Aside />
            </GridItem>
            <GridItem
                area='footer'
                bg='myColor.yellow'
                display={{
                    base: 'block',
                    sm: 'block',
                    md: 'block',
                    lg: 'none',
                }}
                className={s.footerComponent}
            >
                <Footer />
            </GridItem>
        </Grid>
    );
}

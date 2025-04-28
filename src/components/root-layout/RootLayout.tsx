import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { Aside, Footer, Header, Navigation } from '~/components';
import { useAppSelector } from '~/store/hooks';
import { mainSelector } from '~/store/slices/main-slice';

import s from './RootLayout.module.css';

export function RootLayout() {
    const { isOpenBurger } = useAppSelector(mainSelector);

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
                bg={isOpenBurger ? '#fff' : 'myColor.yellow'}
                height={{ base: '64px', lg: '80px' }}
                pl={{ base: '20px', lg: '16px' }}
                pr='36px'
                py='16px'
                className={s.headerComponent}
                w='100vw'
                data-test-id='header'
                zIndex={10}
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
            <GridItem area='main' overflow='hidden' h='100vh'>
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
                w='100vw'
                data-test-id='footer'
            >
                <Footer />
            </GridItem>
        </Grid>
    );
}

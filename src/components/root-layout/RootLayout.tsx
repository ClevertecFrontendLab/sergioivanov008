import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router';

// import s from './RootLayout.module.css';

export function RootLayout() {
    return (
        <Grid
            templateAreas={`"header header header"
                      "nav main aside"`}
            gridTemplateRows='80px 1fr'
            gridTemplateColumns='256px 1fr 256px'
            h='100vh'
            color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem pl='2' bg='orange.300' area='header'>
                Header component
            </GridItem>
            <GridItem pl='2' bg='pink.300' area='nav'>
                Nav component
            </GridItem>
            <GridItem pl='2' bg='green.300' area='main'>
                <Outlet />
            </GridItem>
            <GridItem pl='2' bg='blue.300' area='aside'>
                Aside component
            </GridItem>
        </Grid>
    );
}

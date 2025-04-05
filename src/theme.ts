import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
    base: '0px',
    sm: '360px',
    md: '768px',
    lg: '1440px',
    xl: '1920',
};

const colors = {
    myColor: {
        yellow: '#ffffd3',
    },
    myBlack: {
        500: '#000000',
        600: '#4A4A4A',
    },
    myGreen: {
        500: '#b1ff2e',
        600: '#d7ff94',
    },
};

export const theme = extendTheme({
    breakpoints,
    colors,
});

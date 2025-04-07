import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
    base: '0px',
    sm: '360px',
    md: '768px',
    lg: '1440px',
    xl: '1920px',
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
    myGreenButton: {
        500: '#2db100',
        600: '#2db100',
    },
};

export const theme = extendTheme({
    breakpoints,
    colors,
});

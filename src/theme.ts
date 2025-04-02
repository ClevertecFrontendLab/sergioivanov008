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
};

export const theme = extendTheme({
    breakpoints,
    colors,
});

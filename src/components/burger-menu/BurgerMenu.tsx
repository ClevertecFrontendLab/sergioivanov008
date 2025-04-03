import { HamburgerIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

export function BurgerMenu() {
    return (
        <Box
            display={{
                base: 'block',
                sm: 'block',
                md: 'none',
                lg: 'none',
            }}
        >
            <HamburgerIcon boxSize={6} cursor='pointer' />
        </Box>
    );
}

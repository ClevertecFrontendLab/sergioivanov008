import { HamburgerIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

export function BurgerMenu() {
    return (
        <Box>
            <HamburgerIcon boxSize={6} cursor='pointer' />
        </Box>
    );
}

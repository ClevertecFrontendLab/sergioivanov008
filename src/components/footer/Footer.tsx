import { Flex } from '@chakra-ui/react';

import { FooterButton } from '~/components';
import { FOOTER_MENU } from '~/constants';

export function Footer() {
    return (
        <Flex h='100%' w='100%' justify='space-between'>
            {FOOTER_MENU.map((el) => (
                <FooterButton key={el.id} data={el} />
            ))}
        </Flex>
    );
}

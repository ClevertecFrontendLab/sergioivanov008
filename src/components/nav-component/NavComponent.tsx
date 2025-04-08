import { Accordion, Flex } from '@chakra-ui/react';

import { Category } from '~/components';
import { NAV_DATA } from '~/constants';

export function NavComponent() {
    return (
        <Flex direction='column' h='100%' overflowY='auto' pl='10px' py='10px' pr='16px'>
            <Accordion allowToggle>
                {NAV_DATA.map((el) => (
                    <Category key={el.id} data={el} />
                ))}
            </Accordion>
        </Flex>
    );
}

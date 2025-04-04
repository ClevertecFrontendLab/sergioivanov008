import { Flex } from '@chakra-ui/react';

import { Category } from '~/components';
import { NAV_DATA } from '~/constants';

import s from './NavComponent.module.css';

export function NavComponent() {
    return (
        <Flex direction='column' className={s.navComponent}>
            {NAV_DATA.map((el) => (
                <Category key={el.id} data={el} />
            ))}
        </Flex>
    );
}

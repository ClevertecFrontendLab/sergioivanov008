import { Flex } from '@chakra-ui/react';

import { BurgerMenu } from '~/components';

export function HeaderContent() {
    return (
        <Flex>
            <div>breadCrumb</div>
            <div>avatar</div>
            <div>statistic</div>
            <BurgerMenu />
        </Flex>
    );
}

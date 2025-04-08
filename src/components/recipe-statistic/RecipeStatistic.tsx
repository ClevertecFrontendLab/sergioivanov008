import { Flex } from '@chakra-ui/react';

import { CustomIcon12 } from '~/components';

import { RecipeStatisticPropsType } from '../types';

export function RecipeStatistic({ data }: RecipeStatisticPropsType) {
    return (
        <Flex gap={2}>
            {data.map((el) => (
                <CustomIcon12
                    key={el.id}
                    props={{ boxSize: '12px' }}
                    iconType={el.type}
                    value={el.value}
                />
            ))}
        </Flex>
    );
}

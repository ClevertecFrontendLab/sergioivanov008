import { Flex } from '@chakra-ui/react';

import { CustomIcon12 } from '~/components';

import { RecipeStatisticPropsType } from '../types';

export function RecipeStatistic({ bookmarks, likes }: RecipeStatisticPropsType) {
    return (
        <Flex gap={2}>
            {bookmarks && (
                <CustomIcon12
                    props={{ boxSize: '12px' }}
                    iconType='pin'
                    value={bookmarks.toString()}
                />
            )}
            {likes && (
                <CustomIcon12
                    props={{ boxSize: '12px' }}
                    iconType='like'
                    value={likes.toString()}
                />
            )}
        </Flex>
    );
}

import { SimpleGrid } from '@chakra-ui/react';

import { RecipeItem } from '~/components';

import { RecipesGridPropsType } from '../types';

export function RecipesGrid({ data }: RecipesGridPropsType) {
    return (
        <SimpleGrid
            columns={{ base: 1, md: 2, lg: 1, xl: 2 }}
            gap={{ base: '12px', md: '14px', xl: '24px' }}
        >
            {data.map((el, index) => (
                <RecipeItem key={el.id} data={el} index={index} />
            ))}
        </SimpleGrid>
    );
}

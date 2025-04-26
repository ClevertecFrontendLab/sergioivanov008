import { Button, Flex } from '@chakra-ui/react';

import { RecipesGrid, RecipesTabs } from '~/components';
import { PageRecipesSectionPropsType, PageType } from '~/components/types';
import { ALL_RECIPES, BTN_TEXT, VEGAN_DATA_FULL } from '~/constants';
import { getSortByLikes } from '~/utils';

export function PageRecipesSection({ page }: PageRecipesSectionPropsType) {
    const curData =
        page === ('the-juiciest' as PageType) ? getSortByLikes(ALL_RECIPES, 8) : VEGAN_DATA_FULL;

    return (
        <Flex direction='column' mb='40px' justify='center' align='center'>
            <RecipesTabs page={page} />
            <RecipesGrid data={curData} />
            <Flex w='100%' justify='center' mt='16px'>
                <Button
                    colorScheme='myGreen'
                    variant='solid'
                    color='black'
                    size={{ base: 'md', xl: 'lg' }}
                >
                    {BTN_TEXT.loadMore}
                </Button>
            </Flex>
        </Flex>
    );
}

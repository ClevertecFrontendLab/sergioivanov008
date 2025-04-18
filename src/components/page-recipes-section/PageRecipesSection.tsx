import { Button, Flex } from '@chakra-ui/react';

import { RecipesGrid, RecipesTabs } from '~/components';
import { PageRecipesSectionPropsType, PageType } from '~/components/types';
import { BTN_TEXT, JUICIEST_DATA_FULL, VEGAN_DATA_FULL } from '~/constants';

export function PageRecipesSection({ page }: PageRecipesSectionPropsType) {
    const curData = page === ('juiciest' as PageType) ? JUICIEST_DATA_FULL : VEGAN_DATA_FULL;

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

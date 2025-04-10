import { Button, Flex } from '@chakra-ui/react';

import { RecipesGrid } from '~/components';
import { PageRecipesSectionPropsType, PageType } from '~/components/types';
import { BTN_TEXT, TASTYEST_DATA_FULL, VEGAN_DATA_FULL } from '~/constants';

export function PageRecipesSection({ page }: PageRecipesSectionPropsType) {
    const curData = page === ('tastyest' as PageType) ? TASTYEST_DATA_FULL : VEGAN_DATA_FULL;

    return (
        <Flex direction='column' mb='40px'>
            <RecipesGrid data={curData} />
            <Flex w='100%' justify='center'>
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

import { Button, Flex } from '@chakra-ui/react';

import { RecipesGrid, RecipesTabs } from '~/components';
import { PageRecipesSectionPropsType } from '~/components/types';
import { BTN_TEXT } from '~/constants';

export function PageRecipesSection({ page, data }: PageRecipesSectionPropsType) {
    return (
        <Flex direction='column' mb='40px' justify='center' align='center'>
            <RecipesTabs page={page} />
            <RecipesGrid data={data} />
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

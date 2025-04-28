import { Button, Flex } from '@chakra-ui/react';

import { RecipesGrid } from '~/components';
import { PageRecipesSectionPropsType } from '~/components/types';
import { BTN_TEXT } from '~/constants';

export function PageRecipesSection({ data }: PageRecipesSectionPropsType) {
    return (
        <Flex direction='column' mb='40px' justify='center' align='center'>
            <RecipesGrid data={data} />
            {data.length > 0 && (
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
            )}
        </Flex>
    );
}

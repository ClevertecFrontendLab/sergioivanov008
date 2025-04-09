import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton } from '@chakra-ui/react';

import { RecipeItemLook, SectionTitle } from '~/components';
import { NEW_RECIPES_DATA, TITLES } from '~/constants';

export function NewRecipesSection() {
    return (
        <Flex direction='column' gap={{ base: '12px', xl: '24px' }} mb='40px'>
            <SectionTitle title={TITLES.newRecipes} />
            <Box position='relative'>
                <Box overflow='hidden'>
                    <Flex gap={{ base: '12px', xl: '24px' }}>
                        {NEW_RECIPES_DATA.map((el) => (
                            <RecipeItemLook key={el.id} data={el} />
                        ))}
                    </Flex>
                </Box>
                <IconButton
                    colorScheme='myBlack'
                    aria-label='new-recipes'
                    size='lg'
                    icon={<ArrowBackIcon boxSize='32px' />}
                    position='absolute'
                    top='147px'
                    left='-8px'
                    display={{ base: 'none', lg: 'block' }}
                />
                <IconButton
                    colorScheme='myBlack'
                    aria-label='new-recipes'
                    size='lg'
                    icon={<ArrowForwardIcon boxSize='32px' />}
                    position='absolute'
                    top='147px'
                    right='-8px'
                    display={{ base: 'none', lg: 'block' }}
                />
            </Box>
        </Flex>
    );
}

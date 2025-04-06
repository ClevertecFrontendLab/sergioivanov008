import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Text } from '@chakra-ui/react';

import { RecipeItemLook } from '~/components';
import { NEW_RECIPES_DATA, TITLES } from '~/constants';

export function NewRecipesSection() {
    return (
        <Flex direction='column' gap={6} mt='24px' mb='40px'>
            <Text fontWeight={500} fontSize={48} lineHeight='100%'>
                {TITLES.newRecipes}
            </Text>
            <Flex gap={6} position='relative'>
                {NEW_RECIPES_DATA.map((el) => (
                    <RecipeItemLook key={el.id} data={el} />
                ))}
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
            </Flex>
        </Flex>
    );
}

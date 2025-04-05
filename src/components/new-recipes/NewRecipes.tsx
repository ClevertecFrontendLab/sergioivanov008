import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Text } from '@chakra-ui/react';

import { SliderItem } from '~/components';
import { SLIDER_DATA, TITLES } from '~/constants';

import s from './NewRecipes.module.css';

export function NewRecipes() {
    return (
        <Flex direction='column' gap={6}>
            <Text className={s.text}>{TITLES.newRecipes}</Text>
            <Flex gap={6} className={s.slider}>
                {SLIDER_DATA.map((el) => (
                    <SliderItem key={el.id} data={el} />
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

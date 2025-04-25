import { AddIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Input } from '@chakra-ui/react';
import { useState } from 'react';

import { FILTER_CUSTOM } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { mainActions, mainSelector } from '~/store/slices/main-slice';

import { AdditionalInputPropsType, FilterItemType } from '../types';

export function AdditionalInput({ keyFilter }: AdditionalInputPropsType) {
    const dispatch = useAppDispatch();
    const { selectedFilters } = useAppSelector(mainSelector);
    const selectedCurFilters = selectedFilters[keyFilter];
    const [newAllergen, setNewAllergen] = useState('');

    const handleAddCustomAllergen = () => {
        const curAllergen = newAllergen.trim();
        const tempAllergen: FilterItemType = {
            type: 'allergens',
            key: curAllergen,
            value: curAllergen,
        };
        if (curAllergen && !selectedCurFilters.some((elem) => elem.key === curAllergen)) {
            dispatch(
                mainActions.setSelectedFilters({
                    ...selectedFilters,
                    [keyFilter]: [...selectedFilters[keyFilter], tempAllergen],
                }),
            );
            setNewAllergen('');
        }
    };

    const handleInputKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleAddCustomAllergen();
        }
    };

    return (
        <Flex align='center' py='8px' pl='24px' pr='14px'>
            <Input
                border-radius='4px'
                height='32px'
                placeholder={FILTER_CUSTOM[keyFilter].addText}
                value={newAllergen}
                onChange={(e) => setNewAllergen(e.target.value)}
                onKeyDown={handleInputKeyDown}
            />
            <IconButton
                ml='14px'
                minW='12px'
                h='12px'
                isRound={true}
                variant='solid'
                bgColor='myGreenButton.500'
                color='white'
                aria-label='Done'
                icon={<AddIcon boxSize='7px' />}
                onClick={handleAddCustomAllergen}
            />
        </Flex>
    );
}

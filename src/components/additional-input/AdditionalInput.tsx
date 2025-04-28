import { AddIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Input } from '@chakra-ui/react';
import { useState } from 'react';

import { FILTER_CUSTOM } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { mainActions, mainSelector } from '~/store/slices/main-slice';

import { AdditionalInputPropsType, FilterItemType } from '../types';

export function AdditionalInput({ keyFilter, isSideMenu }: AdditionalInputPropsType) {
    const dispatch = useAppDispatch();
    const { selectedFilters, isOpenDrawer } = useAppSelector(mainSelector);
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

    const curTestId = () => {
        const testIdFull = 'add-other-allergen';
        let testId = '';
        if (!isSideMenu && !isOpenDrawer) testId = testIdFull;
        else if (!isSideMenu && isOpenDrawer) testId = '';
        else if (isSideMenu && !isOpenDrawer) testId = '';
        else if (isSideMenu && isOpenDrawer) testId = testIdFull;

        return testId;
    };

    return (
        <Flex align='center' py='8px' pl='24px' pr='14px'>
            <Input
                data-test-id={curTestId()}
                borderRadius='4px'
                height='32px'
                placeholder={FILTER_CUSTOM[keyFilter].addText}
                value={newAllergen}
                onChange={(e) => setNewAllergen(e.target.value)}
                onKeyDown={handleInputKeyDown}
            />
            <IconButton
                data-test-id={isSideMenu ? 'add-allergen-button' : ''}
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

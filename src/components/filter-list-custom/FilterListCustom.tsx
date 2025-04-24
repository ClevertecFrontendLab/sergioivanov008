import { Checkbox, Flex, Heading, VStack } from '@chakra-ui/react';

import { FILTER_CUSTOM } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { mainActions, mainSelector } from '~/store/slices/main-slice';

import { FilterCustomType, FilterListCustomPropsType } from '../types';

export function FilterListCustom({ keyFilter }: FilterListCustomPropsType) {
    const dispatch = useAppDispatch();
    const { selectedFilters } = useAppSelector(mainSelector);
    const selectedCurFilters = selectedFilters[keyFilter];

    const toggleFilter = (filter: string) => {
        const updatedFilters: Record<FilterCustomType, string[]> = {
            ...selectedFilters,
            [keyFilter]: selectedFilters[keyFilter].includes(filter)
                ? selectedFilters[keyFilter].filter((el) => el !== filter)
                : [...selectedFilters[keyFilter], filter],
        };

        dispatch(mainActions.setSelectedFilters(updatedFilters));
    };

    return (
        <VStack w='100%' spacing='12px' align='flex-start'>
            <Heading as='h6' size='xs' w='100%'>
                {FILTER_CUSTOM[keyFilter].title}
            </Heading>
            {FILTER_CUSTOM[keyFilter].list.map((el, index) => (
                <Flex key={index} gap='8px' align='center' w='100%'>
                    <Checkbox
                        colorScheme='myGreen'
                        iconColor='black'
                        isChecked={selectedCurFilters.includes(el.value)}
                        onChange={() => toggleFilter(el.value)}
                        sx={{
                            '.chakra-checkbox__control': {
                                borderColor: '#d7ff94',
                            },
                        }}
                    >
                        {el.value}
                    </Checkbox>
                </Flex>
            ))}
        </VStack>
    );
}

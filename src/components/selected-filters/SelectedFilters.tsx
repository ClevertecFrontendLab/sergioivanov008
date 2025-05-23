import { Tag, TagCloseButton, TagLabel, Wrap, WrapItem } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { mainActions, mainSelector } from '~/store/slices/main-slice';

import { FilterCustomType, FilterItemType } from '../types';

export function SelectedFilters() {
    const dispatch = useAppDispatch();
    const { selectedFilters } = useAppSelector(mainSelector);
    const curFilterArray = [
        ...selectedFilters.allergens,
        ...selectedFilters.author,
        ...selectedFilters.category,
        ...selectedFilters.meat,
        ...selectedFilters.garnir,
    ];

    const handlerDeleteTag = (filter: FilterItemType) => {
        const keyFilter = filter.type;

        const updatedFilters: Record<FilterCustomType, FilterItemType[]> = {
            ...selectedFilters,
            [keyFilter]: selectedFilters[keyFilter].filter((el) => el !== filter),
        };

        dispatch(mainActions.setSelectedFilters(updatedFilters));
    };

    return (
        <Wrap spacing={2}>
            {curFilterArray.length > 0 &&
                curFilterArray.map((el, index) => (
                    <WrapItem key={index}>
                        <Tag
                            data-test-id='filter-tag'
                            size='md'
                            colorScheme='myGreen'
                            border='1px solid #b1ff2e'
                            borderRadius='6px'
                            bg='#eaffc7'
                        >
                            <TagLabel color='#207e00'>{el.value}</TagLabel>
                            <TagCloseButton color='#207e00' onClick={() => handlerDeleteTag(el)} />
                        </Tag>
                    </WrapItem>
                ))}
        </Wrap>
    );
}

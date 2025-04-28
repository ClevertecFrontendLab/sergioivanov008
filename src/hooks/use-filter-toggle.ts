import { useCallback, useMemo } from 'react';

import { FilterCustomType, FilterItemType } from '~/components/types';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { mainActions, mainSelector } from '~/store/slices/main-slice';

export function useFilterToggle(keyFilter: FilterCustomType) {
    const dispatch = useAppDispatch();
    const { selectedFilters } = useAppSelector(mainSelector);
    const selectedCurFilters = selectedFilters[keyFilter];

    const selectedFilterSet = useMemo(
        () => new Set(selectedCurFilters.map((item) => item.key)),
        [selectedCurFilters],
    );

    const toggleFilter = useCallback(
        (filter: FilterItemType) => {
            const updatedFilters: Record<FilterCustomType, FilterItemType[]> = {
                ...selectedFilters,
                [keyFilter]: selectedFilterSet.has(filter.key)
                    ? selectedCurFilters.filter((el) => el.key !== filter.key)
                    : [...selectedCurFilters, filter],
            };

            dispatch(mainActions.setSelectedFilters(updatedFilters));
        },
        [dispatch, keyFilter, selectedCurFilters, selectedFilters, selectedFilterSet],
    );

    return {
        selectedFilters: selectedCurFilters,
        selectedFilterSet,
        toggleFilter,
    };
}

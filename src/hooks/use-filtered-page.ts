import { useAppSelector } from '~/store/hooks';
import { mainSelector } from '~/store/slices/main-slice';

export const useFilteredPage = () => {
    const { isExcludeAllergens, isCanFiltered, selectedFilters, searchQuery } =
        useAppSelector(mainSelector);
    const isShowFiltered =
        (isExcludeAllergens && selectedFilters.allergens.length > 0) ||
        isCanFiltered ||
        searchQuery;

    return isShowFiltered;
};

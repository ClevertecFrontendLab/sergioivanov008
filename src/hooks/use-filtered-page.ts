import { useAppSelector } from '~/store/hooks';
import { mainSelector } from '~/store/slices/main-slice';

export const useFilteredPage = () => {
    const { isExcludeAllergens, selectedFilters } = useAppSelector(mainSelector);
    const isShowFiltered =
        isExcludeAllergens && Object.values(selectedFilters).some((arr) => arr.length > 0);

    return isShowFiltered;
};

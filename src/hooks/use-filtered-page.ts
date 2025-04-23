import { useAppSelector } from '~/store/hooks';
import { mainSelector } from '~/store/slices/main-slice';

export const useFilteredPage = () => {
    const { isExcludeAllergens, selectedAllergens } = useAppSelector(mainSelector);
    const isShowFiltered = isExcludeAllergens && selectedAllergens.length > 0;

    return isShowFiltered;
};

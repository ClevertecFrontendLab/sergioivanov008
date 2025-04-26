import { PageRecipesSection } from '~/components';
import { PageRecipesSectionPropsType } from '~/components/types';
import { useAppSelector } from '~/store/hooks';
import { mainSelector } from '~/store/slices/main-slice';

export function PageRecipesFilteredSection({ page, data }: PageRecipesSectionPropsType) {
    const { searchQuery } = useAppSelector(mainSelector);
    const filteredData = data.filter((el) =>
        el.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return <PageRecipesSection page={page} data={filteredData} />;
}

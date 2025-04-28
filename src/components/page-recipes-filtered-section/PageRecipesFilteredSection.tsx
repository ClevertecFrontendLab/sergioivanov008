import { useEffect, useState } from 'react';

import { PageRecipesSection } from '~/components';
import { PageRecipesSectionPropsType, RecipeItemFullType } from '~/components/types';
import { useAppSelector } from '~/store/hooks';
import { mainSelector } from '~/store/slices/main-slice';

export function PageRecipesFilteredSection({ data }: PageRecipesSectionPropsType) {
    const { searchQuery, selectedFilters } = useAppSelector(mainSelector);
    const [filteredData, setFilteredData] = useState<RecipeItemFullType[]>(data);

    useEffect(() => {
        let tempData: RecipeItemFullType[] = [];

        if (searchQuery) {
            tempData = data.filter((el) =>
                el.title.toLowerCase().includes(searchQuery.toLowerCase()),
            );
        } else {
            tempData = [...data];
        }

        if (selectedFilters.category.length > 0) {
            tempData = tempData.filter((recipe) =>
                recipe.category.some((category) =>
                    selectedFilters.category.some((filter) => filter.key === category),
                ),
            );
        }

        if (selectedFilters.garnir.length > 0) {
            tempData = tempData.filter((recipe) =>
                selectedFilters.garnir.some((filter) => filter.key === recipe.side),
            );
        }

        if (selectedFilters.allergens.length > 0) {
            tempData = tempData.filter((recipe) => {
                const containsAllergen = recipe.ingredients.some((ingredient) =>
                    selectedFilters.allergens.some((allergen) =>
                        ingredient.title.toLowerCase().includes(allergen.key.toLowerCase()),
                    ),
                );

                return !containsAllergen;
            });
        }

        setFilteredData(tempData);
    }, [data, searchQuery, selectedFilters]);

    return <PageRecipesSection data={filteredData} />;
}

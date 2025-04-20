import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import {
    IngredientsInfo,
    NewRecipesSection,
    NutritionInfo,
    PageWrapper,
    RecipeItemCard,
} from '~/components';
import { ALL_RECIPES } from '~/constants';

export function RecipePage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const data = ALL_RECIPES.find((el) => el.id === id);

    useEffect(() => {
        if (!data) navigate('/', { replace: true });
    }, [data, navigate]);

    if (!data) return null;

    return (
        <PageWrapper>
            <RecipeItemCard data={data} />
            {data.nutritionValue && <NutritionInfo data={data.nutritionValue} />}
            {data.ingredients && data.portions && (
                <IngredientsInfo portions={data.portions} ingredients={data.ingredients} />
            )}
            <NewRecipesSection />
        </PageWrapper>
    );
}

import { Divider } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import {
    PageFooterSection,
    PageHeaderSection,
    PageRecipesFilteredSection,
    PageRecipesSection,
    PageWrapper,
    RecipesTabs,
} from '~/components';
import { PageType } from '~/components/types';
import { CATEGORY_LIST } from '~/constants';
import { useFilteredPage } from '~/hooks/use-filtered-page';
import { useAppSelector } from '~/store/hooks';
import { mainSelector } from '~/store/slices/main-slice';

export function Page() {
    const { allRecipes } = useAppSelector(mainSelector);
    const { category, subcategory } = useParams();
    const navigate = useNavigate();
    const isShowFilteredPage = useFilteredPage();
    let pageHeaderData: PageType | null = null;
    let pageFooterData: PageType | null = null;

    useEffect(() => {
        if (category === 'the-juiciest') {
            navigate('/the-juiciest');
        } else if (category && !CATEGORY_LIST.includes(category)) {
            navigate('/');
        }
    }, [category, navigate]);

    if (category && !CATEGORY_LIST.includes(category)) return null;

    if (category && CATEGORY_LIST.includes(category)) {
        pageHeaderData = category as PageType;
        pageFooterData = 'deserty' as PageType;
    }

    const curData = allRecipes
        .filter((el) => el.category.includes(category!))
        .filter((elem) => elem.subcategory.includes(subcategory!));

    return pageHeaderData !== null && pageFooterData !== null ? (
        <PageWrapper>
            <PageHeaderSection page={pageHeaderData} />
            <RecipesTabs />
            {isShowFilteredPage ? (
                <PageRecipesFilteredSection data={curData} />
            ) : (
                <>
                    <PageRecipesSection data={curData} />
                    <Divider mb={{ base: '8px', lg: '24px' }} />
                    <PageFooterSection page={pageFooterData} />
                </>
            )}
        </PageWrapper>
    ) : null;
}

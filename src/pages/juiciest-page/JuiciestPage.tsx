import { Divider } from '@chakra-ui/react';

import {
    PageFooterSection,
    PageHeaderSection,
    PageRecipesFilteredSection,
    PageRecipesSection,
    PageWrapper,
} from '~/components';
import { useFilteredPage } from '~/hooks/use-filtered-page';
import { useAppSelector } from '~/store/hooks';
import { mainSelector } from '~/store/slices/main-slice';
import { getSortByLikes } from '~/utils';

export function JuiciestPage() {
    const { allRecipes } = useAppSelector(mainSelector);
    const isShowFilteredPage = useFilteredPage();

    const curData = getSortByLikes(allRecipes, 8);

    return (
        <PageWrapper>
            <PageHeaderSection page='the-juiciest' />
            {isShowFilteredPage ? (
                <PageRecipesFilteredSection data={allRecipes} />
            ) : (
                <PageRecipesSection data={curData} />
            )}
            <Divider mb={{ base: '8px', lg: '24px' }} />
            <PageFooterSection page='vegan' />
        </PageWrapper>
    );
}

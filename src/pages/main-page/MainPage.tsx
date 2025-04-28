import {
    BlogsSection,
    JuiciestSection,
    NewRecipesSection,
    PageFooterSection,
    PageHeaderSection,
    PageRecipesFilteredSection,
    PageWrapper,
} from '~/components';
import { useFilteredPage } from '~/hooks/use-filtered-page';
import { useAppSelector } from '~/store/hooks';
import { mainSelector } from '~/store/slices/main-slice';

export function MainPage() {
    const { allRecipes } = useAppSelector(mainSelector);
    const isShowFilteredPage = useFilteredPage();

    return (
        <PageWrapper>
            <PageHeaderSection page='home' />
            {isShowFilteredPage ? (
                <PageRecipesFilteredSection data={allRecipes} />
            ) : (
                <>
                    <NewRecipesSection />
                    <JuiciestSection />
                </>
            )}
            <BlogsSection />
            <PageFooterSection page='vegan' />
        </PageWrapper>
    );
}

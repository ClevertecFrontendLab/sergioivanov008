import {
    BlogsSection,
    JuiciestSection,
    NewRecipesSection,
    PageFooterSection,
    PageHeaderSection,
    PageRecipesSection,
    PageWrapper,
} from '~/components';
import { useFilteredPage } from '~/hooks/use-filtered-page';

export function MainPage() {
    const isShowFilteredPage = useFilteredPage();

    return (
        <PageWrapper>
            <PageHeaderSection page='home' />
            {isShowFilteredPage ? (
                <PageRecipesSection page='filtered' />
            ) : (
                <>
                    <NewRecipesSection />
                    <JuiciestSection />
                    <BlogsSection />
                    <PageFooterSection page='vegan' />
                </>
            )}
        </PageWrapper>
    );
}

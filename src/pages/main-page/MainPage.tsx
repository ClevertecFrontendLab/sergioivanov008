import {
    BlogsSection,
    JuiciestSection,
    NewRecipesSection,
    PageFooterSection,
    PageHeaderSection,
    PageWrapper,
} from '~/components';

export function MainPage() {
    return (
        <PageWrapper>
            <PageHeaderSection page='home' />
            <NewRecipesSection />
            <JuiciestSection />
            <BlogsSection />
            <PageFooterSection page='vegan' />
        </PageWrapper>
    );
}

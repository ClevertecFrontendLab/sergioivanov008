import { Divider } from '@chakra-ui/react';

import {
    PageFooterSection,
    PageHeaderSection,
    PageRecipesSection,
    PageWrapper,
} from '~/components';
import { useFilteredPage } from '~/hooks/use-filtered-page';

export function JuiciestPage() {
    const isShowFilteredPage = useFilteredPage();

    return (
        <PageWrapper>
            <PageHeaderSection page='the-juiciest' />
            {isShowFilteredPage ? (
                <PageRecipesSection page='filtered' />
            ) : (
                <>
                    <PageRecipesSection page='the-juiciest' />
                    <Divider mb={{ base: '8px', lg: '24px' }} />
                    <PageFooterSection page='vegan' />
                </>
            )}
        </PageWrapper>
    );
}

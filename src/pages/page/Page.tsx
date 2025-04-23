import { Divider } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import {
    PageFooterSection,
    PageHeaderSection,
    PageRecipesSection,
    PageWrapper,
} from '~/components';
import { PageType } from '~/components/types';
import { CATEGORY_LIST } from '~/constants';
import { useFilteredPage } from '~/hooks/use-filtered-page';

export function Page() {
    const { category } = useParams();
    const navigate = useNavigate();
    const isShowFilteredPage = useFilteredPage();
    let pageHeaderData: PageType | null = null;
    let pageFooterData: PageType | null = null;

    useEffect(() => {
        if (category && category !== 'juiciest' && !CATEGORY_LIST.includes(category)) {
            navigate('/');
        }
    }, [category, navigate]);

    if (category) {
        if (category === 'juiciest') {
            pageHeaderData = 'juiciest' as PageType;
            pageFooterData = 'vegan' as PageType;
        } else if (CATEGORY_LIST.includes(category)) {
            pageHeaderData = 'vegan' as PageType;
            pageFooterData = 'deserty' as PageType;
        }
    }

    return pageHeaderData !== null && pageFooterData !== null ? (
        <PageWrapper>
            <PageHeaderSection page={pageHeaderData} />
            {isShowFilteredPage ? (
                <PageRecipesSection page='filtered' />
            ) : (
                <>
                    <PageRecipesSection page={pageHeaderData} />
                    <Divider mb={{ base: '8px', lg: '24px' }} />
                    <PageFooterSection page={pageFooterData} />
                </>
            )}
        </PageWrapper>
    ) : null;
}

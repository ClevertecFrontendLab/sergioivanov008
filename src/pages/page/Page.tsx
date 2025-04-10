import { Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import { PageFooterSection, PageHeaderSection, PageRecipesSection } from '~/components';
import { PageType } from '~/components/types';
import { CATEGORY_LIST } from '~/constants';

export function Page() {
    const { categoryId } = useParams();
    const navigate = useNavigate();
    let pageHeaderData: PageType | null = null;
    let pageFooterData: PageType | null = null;

    useEffect(() => {
        if (categoryId && categoryId !== 'tastyest' && !CATEGORY_LIST.includes(categoryId)) {
            navigate('/');
        }
    }, [categoryId, navigate]);

    if (categoryId) {
        if (categoryId === 'tastyest') {
            pageHeaderData = 'tastyest' as PageType;
            pageFooterData = 'vegan' as PageType;
        } else if (CATEGORY_LIST.includes(categoryId)) {
            pageHeaderData = 'vegan' as PageType;
            pageFooterData = 'deserty' as PageType;
        }
    }

    return pageHeaderData !== null && pageFooterData !== null ? (
        <Flex
            direction='column'
            pl={{ base: '16px', md: '20px', lg: '24px' }}
            pr={{ base: '16px', md: '20px', lg: '24px' }}
        >
            <PageHeaderSection page={pageHeaderData} />
            <PageRecipesSection page={pageHeaderData} />
            <PageFooterSection page={pageFooterData} />
        </Flex>
    ) : null;
}

import { Divider, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import { PageFooterSection, PageHeaderSection, PageRecipesSection } from '~/components';
import { PageType } from '~/components/types';
import { CATEGORY_LIST } from '~/constants';

export function Page() {
    const { category } = useParams();
    const navigate = useNavigate();
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
            pageFooterData = 'vegan-cuisine' as PageType;
        } else if (CATEGORY_LIST.includes(category)) {
            pageHeaderData = 'vegan-cuisine' as PageType;
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
            <Divider mb={{ base: '8px', lg: '24px' }} />
            <PageFooterSection page={pageFooterData} />
        </Flex>
    ) : null;
}

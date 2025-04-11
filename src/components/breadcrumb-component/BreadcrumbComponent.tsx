import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useParams } from 'react-router';

import { NAV_DATA, PAGE_DB, TEXT } from '~/constants';

import { BreadcrumbSlotType, PageType } from '../types';

export function BreadcrumbComponent() {
    const { categoryId, categoryItemId } = useParams();
    const slot1: BreadcrumbSlotType = { isShow: true, isCurrentPage: false, text: '', linkTo: '' };
    const slot2: BreadcrumbSlotType = { isShow: true, isCurrentPage: false, text: '', linkTo: '' };
    const slot3: BreadcrumbSlotType = { isShow: true, isCurrentPage: true, text: '', linkTo: '' };

    if (!categoryId) {
        slot1.isCurrentPage = true;
        slot2.isShow = false;
        slot3.isShow = false;
    } else if (categoryId) {
        slot2.isShow = true;
        slot2.text = PAGE_DB[categoryId as PageType].title;
        if (!categoryItemId) {
            slot2.isCurrentPage = true;
            slot3.isShow = false;
        } else if (categoryItemId) {
            slot2.isCurrentPage = false;
            slot3.isShow = true;
            slot3.text = NAV_DATA.find((el) => el.categoryNav === categoryId)?.items.find(
                (el) => el.id === categoryItemId,
            )?.title;
        }
    }

    return (
        <Box
            display={{
                base: 'none',
                sm: 'none',
                md: 'none',
                lg: 'block',
            }}
        >
            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem isCurrentPage={slot1.isCurrentPage}>
                    <BreadcrumbLink
                        href='/'
                        color={slot1.isCurrentPage ? '#000' : 'rgba(0, 0, 0, 0.64)'}
                    >
                        {TEXT.mainPage}
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {slot2.isShow && (
                    <BreadcrumbItem isCurrentPage={slot2.isCurrentPage}>
                        <BreadcrumbLink
                            href={`/${categoryId}`}
                            color={slot2.isCurrentPage ? '#000' : 'rgba(0, 0, 0, 0.64)'}
                        >
                            {slot2.text}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                )}

                {slot3.isShow && (
                    <BreadcrumbItem isCurrentPage={slot3.isCurrentPage}>
                        <BreadcrumbLink
                            color={slot3.isCurrentPage ? '#000' : 'rgba(0, 0, 0, 0.64)'}
                        >
                            {slot3.text}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                )}
            </Breadcrumb>
        </Box>
    );
}

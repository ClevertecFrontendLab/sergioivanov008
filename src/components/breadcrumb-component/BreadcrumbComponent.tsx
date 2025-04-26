import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

import { ALL_RECIPES, CATEGORY_LIST, NAV_DATA, PAGE_DB, TEXT } from '~/constants';

import { BreadcrumbSlotType, PageType } from '../types';

export function BreadcrumbComponent() {
    const location = useLocation();
    const navigate = useNavigate();
    const pathnameArr = location.pathname.split('/');
    const category = pathnameArr[1];
    const subcategory = pathnameArr[2];
    const id = pathnameArr[3];

    useEffect(() => {
        if (category && category !== 'the-juiciest' && !CATEGORY_LIST.includes(category)) {
            navigate('/', { replace: true });
        }
    }, [category, navigate]);

    if (category && category !== 'the-juiciest' && !CATEGORY_LIST.includes(category)) return null;

    const slot1: BreadcrumbSlotType = { isShow: true, isCurrentPage: false, text: '', linkTo: '' };
    const slot2: BreadcrumbSlotType = { isShow: true, isCurrentPage: false, text: '', linkTo: '' };
    const slot3: BreadcrumbSlotType = { isShow: true, isCurrentPage: false, text: '', linkTo: '' };
    const slot4: BreadcrumbSlotType = { isShow: true, isCurrentPage: true, text: '', linkTo: '' };

    if (!category) {
        slot1.isCurrentPage = true;
        slot2.isShow = false;
        slot3.isShow = false;
        slot4.isShow = false;
    } else if (category) {
        slot2.isShow = true;
        slot2.text = PAGE_DB[category as PageType].title;
        if (!subcategory) {
            slot2.isCurrentPage = true;
            slot3.isShow = false;
            slot4.isShow = false;
        } else if (subcategory) {
            slot2.isCurrentPage = false;
            slot3.isShow = true;
            slot3.text = NAV_DATA.find((el) => el.categoryNav === category)?.items.find(
                (el) => el.subcategoryNav === subcategory,
            )?.title;
            if (!id) {
                slot3.isCurrentPage = true;
                slot4.isShow = false;
            } else if (id) {
                slot3.isCurrentPage = false;
                slot4.isShow = true;
                slot4.text = ALL_RECIPES.find((el) => el.id === id)?.title;
            }
        }
    }

    return (
        <Breadcrumb
            data-test-id='breadcrumbs'
            spacing='8px'
            separator={<ChevronRightIcon color='gray.500' />}
            sx={{
                ol: {
                    display: 'flex',
                    flexWrap: 'wrap',
                },
            }}
        >
            <BreadcrumbItem isCurrentPage={slot1.isCurrentPage}>
                <BreadcrumbLink
                    as={Link}
                    to='/'
                    color={slot1.isCurrentPage ? '#000' : 'rgba(0, 0, 0, 0.64)'}
                >
                    {TEXT.mainPage}
                </BreadcrumbLink>
            </BreadcrumbItem>

            {slot2.isShow && (
                <BreadcrumbItem isCurrentPage={slot2.isCurrentPage}>
                    <BreadcrumbLink
                        as={Link}
                        to={`/${category}`}
                        color={slot2.isCurrentPage ? '#000' : 'rgba(0, 0, 0, 0.64)'}
                    >
                        {slot2.text}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )}

            {slot3.isShow && (
                <BreadcrumbItem isCurrentPage={slot3.isCurrentPage}>
                    <BreadcrumbLink
                        as={Link}
                        to={`/${category}`}
                        color={slot3.isCurrentPage ? '#000' : 'rgba(0, 0, 0, 0.64)'}
                    >
                        {slot3.text}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )}

            {slot4.isShow && (
                <BreadcrumbItem isCurrentPage={slot4.isCurrentPage}>
                    <BreadcrumbLink color={slot4.isCurrentPage ? '#000' : 'rgba(0, 0, 0, 0.64)'}>
                        {slot4.text}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )}
        </Breadcrumb>
    );
}

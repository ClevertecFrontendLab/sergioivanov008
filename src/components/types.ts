import { IconProps } from '@chakra-ui/react';

export type CustomIcon12Type = 'pin' | 'view' | 'like' | 'exit';

export type CustomIcon12PropsType = {
    iconType: CustomIcon12Type;
    value?: string;
    props?: IconProps;
};

export type OutCustomIcon12Type = Partial<Record<CustomIcon12Type, React.JSX.Element>>;

export type CustomIcon24Type = 'addRecipe' | 'filter';

export type OutCustomIcon24Type = Partial<Record<CustomIcon24Type, React.JSX.Element>>;

export type CustomIcon24PropsType = {
    iconType: CustomIcon24Type;
    props?: IconProps;
};

export type CustomIcon16Type = 'home' | 'search' | 'addRecipe';

export type OutCustomIcon16Type = Partial<Record<CustomIcon16Type, React.JSX.Element>>;

export type CustomIcon16PropsType = {
    iconType: CustomIcon16Type;
    props?: IconProps;
};

export type FooterMenuItemType = {
    id: string;
    type: CustomIcon16Type;
    text: string;
    isActive?: boolean;
    isImage?: boolean;
    image?: string;
};

export type FooterButtonPropsType = {
    data: FooterMenuItemType;
};

export type NavDataItemsType = {
    id: string;
    title: string;
    subcategoryNav: string;
};

export type NavDataType = {
    id: string;
    categoryView: string;
    categoryNav: string;
    testId: string;
    image?: string;
    items: NavDataItemsType[];
};

export type CategoryPropsType = {
    data: NavDataType;
};

export type CategoryItemPropsType = {
    data: NavDataItemsType;
    categoryNav: string;
};

export type CategoryDataType = {
    id: string;
    category: string;
    image: string;
};

export type CategoryKeyType =
    | 'salads'
    | 'snacks'
    | 'perviebluda'
    | 'second-dish'
    | 'deserty'
    | 'gril'
    | 'vegan'
    | 'detskie'
    | 'lechebnoe'
    | 'nacional'
    | 'soucy'
    | 'napitki'
    | 'zagotovki';

export type CategoryDbType = Record<CategoryKeyType, CategoryDataType>;

export type BadgePropsType = {
    category: string[];
    color: string;
};

export type RecipePropsType = {
    id: string;
    type: CustomIcon12Type;
    value: string;
};

export type RecipeRecomendationType = {
    id: string;
    image: string;
    name: string;
};

export type RecipeItemPropsType = {
    data: RecipeItemFullType;
};

export type AvatarContentType = {
    image: string;
    name: string;
    nickName: string;
};

export type AvatarContentPropsType = {
    data: AvatarContentType;
};

export type BlogsItemType = {
    id: string;
    avatarData: AvatarContentType;
    description: string;
};

export type BlogsItemPropsType = {
    data: BlogsItemType;
};

export type RecomendationBadgePropsType = {
    data: RecipeRecomendationType;
};

export type SectionTitlePropsType = {
    title: string;
};

export type RecipeStatisticPropsType = {
    bookmarks?: number;
    likes?: number;
};

export type PageType = CategoryKeyType | 'home' | 'juiciest';

export type PageHeaderItemType = {
    id: string;
    title: string;
    desc: string;
    recipes?: RecipeItemFullType[];
    pinRecipes?: RecipeItemFullType[];
};

export type PageDbType = Record<PageType, PageHeaderItemType>;

export type PageHeaderSectionPropsType = {
    data: PageHeaderItemType;
};

export type PagePropsType = {
    page: PageType;
};

export type RecipesGridPropsType = {
    data: RecipeItemFullType[];
};

export type PageRecipesSectionPropsType = {
    page: PageType;
};

export type BreadcrumbSlotType = {
    isShow: boolean;
    isCurrentPage: boolean;
    text?: string;
    linkTo: string;
};

export type RecipeItemFullType = {
    id: string;
    title: string;
    description: string;
    category: string[];
    subcategory?: string[];
    image?: string;
    bookmarks?: number;
    likes?: number;
    date?: string;
    time?: string;
    portions?: number;
    nutritionValue?: {
        calories: number;
        proteins: number;
        fats: number;
        carbohydrates: number;
    };
    ingredients?: {
        title: string;
        count: string;
        measureUnit: string;
    }[];
    steps?: {
        stepNumber: number;
        description: string;
        image: string;
    }[];
    meat?: string;
    side?: string;
    recomendation?: RecipeRecomendationType;
};

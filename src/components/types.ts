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
};

export type NavDataType = {
    id: string;
    category: string;
    image?: string;
    items: NavDataItemsType[];
};

export type CategoryPropsType = {
    data: NavDataType;
};

export type CategoryItemPropsType = {
    data: NavDataItemsType;
};

export type CategoryDataType = {
    id: string;
    category: string;
    image: string;
};

export type CategoryKeyType =
    | 'salaty'
    | 'zakuski'
    | 'pervieBluda'
    | 'vtorieBluda'
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
    type: CategoryKeyType;
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

export type RecipeItemType = {
    id: string;
    image?: string;
    title: string;
    description: string;
    badgeType: CategoryKeyType;
    recipeProps?: RecipePropsType[];
    recomendation?: RecipeRecomendationType;
};

export type RecipeItemPropsType = {
    data: RecipeItemType;
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
    data: RecipePropsType[];
};

export type PageType = CategoryKeyType | 'home' | 'tastyest';

export type PageHeaderItemType = {
    title: string;
    desc?: string;
};

export type PageDbType = Record<PageType, PageHeaderItemType>;

export type PageHeaderSectionPropsType = {
    data: PageHeaderItemType;
};

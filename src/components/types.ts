import { IconProps } from '@chakra-ui/react';

export type CustomIcon12Type = 'pin' | 'view' | 'like' | 'exit' | 'subscribe' | 'subscribers';

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

export type CustomIcon16Type = 'home' | 'search' | 'addRecipe' | 'time';

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

export type NavComponentPropsType = {
    isLeftNav: boolean;
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
    isLeftNav: boolean;
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
    index?: number;
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

export type PageType = CategoryKeyType | 'home' | 'the-juiciest' | 'filtered';

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
    page?: PageType;
    data: RecipeItemFullType[];
};

export type RecipesTabsPropsType = {
    page: PageType;
};

export type BreadcrumbSlotType = {
    isShow: boolean;
    isCurrentPage: boolean;
    text?: string;
    linkTo: string;
};

export type NutritionValueKeyType = 'calories' | 'proteins' | 'fats' | 'carbohydrates';

export type NutritionValueType = Record<NutritionValueKeyType, number>;

export type IngredientsType = {
    title: string;
    count: string;
    measureUnit: string;
};

export type StepsType = {
    stepNumber: number;
    description: string;
    image?: string;
};

export type AuthorType = {
    image: string;
    firstName: string;
    lastName: string;
    nickName: string;
    subscribers: number;
};

export type RecipeItemFullType = {
    id: string;
    title: string;
    description: string;
    category: string[];
    subcategory: string[];
    image?: string;
    bookmarks?: number;
    likes?: number;
    date?: string;
    time: string;
    portions: number;
    nutritionValue: NutritionValueType;
    ingredients: IngredientsType[];
    steps: StepsType[];
    meat?: string;
    side?: string;
    recomendation?: RecipeRecomendationType;
    author: AuthorType;
};

export type RecipeItemCardPropsType = {
    data: RecipeItemFullType;
};

export type NutritionInfoPropsType = {
    data: NutritionValueType;
};

export type IngredientsInfoPropsType = {
    portions: number;
    ingredients: IngredientsType[];
};

export type CookingStepsInfoPropsType = {
    data: StepsType[];
};

export type AuthorInfoPropsType = {
    data: AuthorType;
};

export type FilterCustomType = 'allergens' | 'category' | 'author' | 'meat' | 'garnir';

export type FilterItemType = {
    type: FilterCustomType;
    key: string;
    value: string;
};

export type FilterCustomItemType = {
    title: string;
    list: FilterItemType[];
    addText?: string;
};

export type FilterSelectAllergenPropsType = {
    keyFilter: FilterCustomType;
    isSideMenu: boolean;
};

export type AdditionalInputPropsType = {
    keyFilter: FilterCustomType;
};

export type FilterSelectCustomPropsType = {
    keyFilter: FilterCustomType;
};

export type FilterListCustomPropsType = {
    keyFilter: FilterCustomType;
};

export type SelectedFiltersType = Record<FilterCustomType, FilterItemType[]>;

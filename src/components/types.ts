import { IconProps } from '@chakra-ui/react';

export type CustomIcon12Type = 'pin' | 'view' | 'like' | 'exit';

export type CustomIcon12PropsType = {
    iconType: CustomIcon12Type;
    value?: string;
    props?: IconProps;
};

export type OutCustomIcon12Type = Partial<Record<CustomIcon12Type, React.JSX.Element>>;

export type CustomIcon24Type = 'addRecipe';

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

export type FooterButtonPropsType = {
    type: CustomIcon16Type;
    text: string;
    isActive?: boolean;
};

export type FooterMenuItemType = {
    id: string;
    type: CustomIcon16Type;
    text: string;
    isActive?: boolean;
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

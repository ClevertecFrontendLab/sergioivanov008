import { IconProps } from '@chakra-ui/react';

export type CustomIcon12Type = 'pin' | 'view' | 'like';

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

export type FooterButtonPropsType = {
    type: BigCustomIconType;
    text: string;
};

export type FooterMenuItemType = {
    id: string;
    type: BigCustomIconType;
    text: string;
};

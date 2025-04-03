import { IconProps } from '@chakra-ui/react';

export type CustomIconType = 'pin' | 'view' | 'like' | 'addRecipe';

export type CustomIconPropsType = {
    iconType: CustomIconType;
    value?: string;
    props?: IconProps;
};

export type OutIconType = Partial<Record<CustomIconType, React.JSX.Element>>;

export type BigCustomIconPropsType = {
    iconType: CustomIconType;
    props?: IconProps;
};

import { IconProps } from '@chakra-ui/react';

export type CustomIconType = 'pin' | 'view' | 'like';

export type CustomIconPropsType = {
    iconType: CustomIconType;
    value?: string;
    props?: IconProps;
};

export type OutIconType = Record<CustomIconType, React.JSX.Element>;

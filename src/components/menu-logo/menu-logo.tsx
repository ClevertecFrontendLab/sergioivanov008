import React from 'react';
import './menu-logo.css';

import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { IconClever } from '@components/icon-clever';
import { IconFit } from '@components/icon-fit';
import { IconLogoMobile } from '@components/icon-logo-mobile';

export const MenuLogo: React.FC = () => {
    const isCollapsed = useAppSelector(state => state.aside.isAsideCollapsed);

    const elClass = `logo ${isCollapsed ? 'collapsed' : ''}`;

    return (
        <div className={elClass}>
            <div className="logo-clever">
                <IconClever />
            </div>
            <div className="logo-fit">
                <IconFit />
            </div>
            <div className="logo-mobile">
                <IconLogoMobile />
            </div>
        </div>
    );
};

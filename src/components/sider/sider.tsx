import React from 'react';
import './sider.css';

import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { MenuLogo } from '@components/menu-logo';
import { Navigation } from '@components/navigation';
import { MenuExit } from '@components/menu-exit';
import { MenuSwitch } from '@components/menu-switch';

export const Sider: React.FC = () => {
    const collapsed = useAppSelector(state => state.aside.isAsideCollapsed);
    const siderClass = `sider ${collapsed ? 'collapsed' : ''}`;

    return (
        <div className={siderClass}>
            <div className="menu-wrapper">
                <MenuLogo />
                <Navigation />
            </div>
            <MenuExit />
            <MenuSwitch />
        </div>
    );
};

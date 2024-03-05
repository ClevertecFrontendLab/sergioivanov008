import React from 'react';
import './sider.css';

import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { MenuLogo } from '@components/menu-logo';
import { Navigation } from '@components/navigation';
import { MenuExit } from '@components/menu-exit';
import { MenuSwitch } from '@components/menu-switch';
import { collapsedSelector } from '@redux/sagas/selectors';

export const Sider: React.FC = () => {
    const collapsed = useAppSelector(collapsedSelector);
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

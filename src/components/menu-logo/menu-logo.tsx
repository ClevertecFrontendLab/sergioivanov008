import React from 'react';
import './menu-logo.css';

import { useAppSelector } from '@hooks/typed-react-redux-hooks';

export const MenuLogo: React.FC = () => {
    const isCollapsed = useAppSelector(state => state.aside.isAsideCollapsed);

    const elClass = `logo ${isCollapsed ? 'collapse' : ''}`;

    return (
        <div className={elClass}>
            <div className="logo-clever"></div>
            <div className="logo-fit"></div>
        </div>
    );
};

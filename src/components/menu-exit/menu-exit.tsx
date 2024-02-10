import React from 'react';
import './menu-exit.css';

import { useAppSelector } from '@hooks/typed-react-redux-hooks';

export const MenuExit: React.FC = () => {
    const collapsed = useAppSelector(state => state.aside.isAsideCollapsed);

    const elClass = `exit ${collapsed ? 'collapse' : ''}`;

    return (
        <div className={elClass}>
            <div className="exit-icon"></div>
            <div className="exit-title">Выход</div>
        </div>
    );
};

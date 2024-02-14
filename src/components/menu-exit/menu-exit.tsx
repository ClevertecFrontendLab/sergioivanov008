import React from 'react';
import './menu-exit.css';

import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { IconExit } from '@components/icon-exit';

export const MenuExit: React.FC = () => {
    const collapsed = useAppSelector(state => state.aside.isAsideCollapsed);

    const elClass = `exit ${collapsed ? 'collapsed' : ''}`;

    return (
        <div className={elClass}>
            <div className="exit-icon">
                <IconExit />
            </div>
            <div className="exit-title">
                Выход
            </div>
        </div>
    );
};

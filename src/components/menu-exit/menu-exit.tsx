import React from 'react';
import './menu-exit.css';

import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { IconExit } from '@components/icon-exit';
import { authActions } from '@redux/slices/auth-slice';
import { ROUTE } from '@constants/constants';
import { push } from 'redux-first-history';
import { clearLocalStorage } from '@utils/utils';
import { collapsedSelector } from '@redux/sagas/selectors';

export const MenuExit: React.FC = () => {
    const dispatch = useAppDispatch();
    const collapsed = useAppSelector(collapsedSelector);

    const elClass = `exit ${collapsed ? 'collapsed' : ''}`;

    const handleExit = () => {
        dispatch(authActions.setIsAuth(false));
        clearLocalStorage();
        dispatch(push(ROUTE.INDEX));
    }

    return (
        <div
            className={elClass}
            onClick={handleExit}
        >
            <div className="exit-icon">
                <IconExit />
            </div>
            <div className="exit-title">
                Выход
            </div>
        </div>
    );
};

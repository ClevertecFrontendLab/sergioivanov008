import React from 'react';
import './menu-switch.css';

import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { asideActions } from '@redux/slices/aside-slice';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { NUMBER_DATA } from '@constants/constants';
import { collapsedSelector } from '@redux/sagas/selectors';

export const MenuSwitch: React.FC = () => {
    const dispatch = useAppDispatch()
    const isCollapsed = useAppSelector(collapsedSelector);

    const menuIcon = isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />;

    const toggleCollapsed = () => {
        dispatch(asideActions.toggleIsAsideCollapsed(!isCollapsed));
    }

    const dataTestId = document.documentElement.clientWidth >= NUMBER_DATA.BREAK_WIDTH ? 'sider-switch' : 'sider-switch-mobile';

    return (
        <div className='menu-switch' onClick={toggleCollapsed} data-test-id={dataTestId}>
            {menuIcon}
        </div>
    );
};

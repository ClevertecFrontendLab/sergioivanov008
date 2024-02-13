import React from 'react';
import './navigation.css';

import { CalendarOutlined, HeartFilled, IdcardOutlined, TrophyFilled } from '@ant-design/icons';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';

const menuItems = [
    {
        id: '001',
        itemIcon: <CalendarOutlined />,
        itemText: 'Календарь',
    },
    {
        id: '002',
        itemIcon: <HeartFilled />,
        itemText: 'Тренировки',
    },
    {
        id: '003',
        itemIcon: <TrophyFilled />,
        itemText: 'Достижения',
    },
    {
        id: '004',
        itemIcon: <IdcardOutlined />,
        itemText: 'Профиль',
    },
];

export const Navigation: React.FC = () => {
    const collapsed = useAppSelector(state => state.aside.isAsideCollapsed);
    const menuClass = `menu ${collapsed ? 'collapsed' : ''}`;

    return (
        <div className={menuClass}>
            {menuItems.map((el) => (
                <div className='menu-item' key={el.id}>
                    <div className="menu-item-icon">
                        {el.itemIcon}
                    </div>
                    <div className="menu-item-text">
                        {el.itemText}
                    </div>
                </div>
            ))}
        </div>
    );
};

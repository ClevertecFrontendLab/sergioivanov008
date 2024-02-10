import React from 'react';
import './navigation.css';

import { Menu } from 'antd';
import { CalendarOutlined, HeartFilled, IdcardOutlined, TrophyFilled } from '@ant-design/icons';

type PropTypes = {
    collapsed: boolean
};

export const Navigation: React.FC<PropTypes> = ({collapsed}) => {

    return (
        <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            inlineCollapsed={collapsed}
            inlineIndent={16}
            items={[
                {
                    key: '1',
                    icon: <CalendarOutlined/>,
                    label: "Календарь",
                },
                {
                    key: '2',
                    icon: <HeartFilled/>,
                    label: "Тренировки",
                },
                {
                    key: '3',
                    icon: <TrophyFilled/>,
                    label: "Достижения",
                },
                {
                    key: '4',
                    icon: <IdcardOutlined/>,
                    label: "Профиль",
                }
            ]}
        />
    );
};

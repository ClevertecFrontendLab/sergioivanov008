import React from 'react';
import './header.css';
import { Typography } from 'antd';
import { HEADER_TEXT, ROUTE } from '@constants/constants';
import { SettingOutlined } from '@ant-design/icons';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { useLocation } from 'react-router-dom';

const { Title } = Typography;

export const Header: React.FC = () => {
    const location = useLocation();
    const collapsed = useAppSelector(state => state.aside.isAsideCollapsed);
    const spanClass = collapsed ? '' : 'span-block';
    const headerStyle = `header ${location.pathname === ROUTE.FEEDBACKS && 'feedback'}`;

    return (
        <header className={headerStyle}>
                <div className='breadcrumb'>
                    <div className="breadcrumb-item">
                        {HEADER_TEXT.HEADER_TEXT_1}
                    </div>
                </div>
            {location.pathname === ROUTE.MAIN &&
                <div className="header-content">
                    <Title className='header-text'>
                        {HEADER_TEXT.HEADER_TEXT_2_1}
                        <span className={spanClass}>{HEADER_TEXT.HEADER_TEXT_2_2}</span>
                    </Title>
                    <div className='header-btn'>
                        <div className="header-btn-icon">
                            <SettingOutlined />
                        </div>
                        <div className="header-btn-text">
                            {HEADER_TEXT.HEADER_TEXT_3}
                        </div>
                    </div>
                </div>
            }
        </header>
    );
};

import React from 'react';
import './header.css';
import { Typography } from 'antd';
import { HEADER_TEXT } from '@constants/constants';
import { SettingOutlined } from '@ant-design/icons';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';

const { Title } = Typography;

export const Header: React.FC = () => {
    const collapsed = useAppSelector(state => state.aside.isAsideCollapsed);
    const spanClass = collapsed ? '' : 'span-block';

    return (
        <header className="header">
                <div className='breadcrumb'>
                    <div className="breadcrumb-item">
                        {HEADER_TEXT.HEADER_TEXT_1}
                    </div>
                </div>
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
        </header>
    );
};

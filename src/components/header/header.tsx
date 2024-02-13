import React from 'react';
import './header.css';
import { Breadcrumb, Typography } from 'antd';
import { HEADER_TEXT } from '@constants/constants';
import { SettingOutlined } from '@ant-design/icons';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';

const { Title } = Typography;

export const Header: React.FC = () => {
    const collapsed = useAppSelector(state => state.aside.isAsideCollapsed);
    const spanClass = collapsed ? '' : 'span-block';

    return (
        <header className="header">
            <Breadcrumb>
                <Breadcrumb.Item>
                    {HEADER_TEXT.HEADER_TEXT_1}
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="header-content">
                <Title className='header-text'>
                    {HEADER_TEXT.HEADER_TEXT_2_1}
                    <span className={spanClass}>{HEADER_TEXT.HEADER_TEXT_2_2}</span>
                </Title>
                <div className='header-btn'>
                    <SettingOutlined />
                    {HEADER_TEXT.HEADER_TEXT_3}
                </div>
            </div>
        </header>
    );
};

import React from 'react';
import './header.css';
import { Breadcrumb, Button, Typography } from 'antd';
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
                    {HEADER_TEXT.HEADER_TEXT_2}
                    <span className={spanClass}>{HEADER_TEXT.HEADER_TEXT_2_2}</span>
                    {HEADER_TEXT.HEADER_TEXT_2_3}
                </Title>
                <Button type="text" className='header-btn'>
                    <SettingOutlined />
                    {HEADER_TEXT.HEADER_TEXT_3}
                </Button>
            </div>
        </header>
    );
};

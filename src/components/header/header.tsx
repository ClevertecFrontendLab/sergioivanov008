import React from 'react';
import './header.css';
import { Breadcrumb, Button, Typography } from 'antd';
import { HEADER_TEXT } from '@constants/constants';
import { SettingOutlined } from '@ant-design/icons';

const { Title } = Typography;

export const Header: React.FC = () => {

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
                </Title>
                <Button type="text" className='header-btn'>
                    <SettingOutlined />
                    {HEADER_TEXT.HEADER_TEXT_3}
                </Button>
            </div>
        </header>
    );
};

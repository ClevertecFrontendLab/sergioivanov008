import React from 'react';

import 'antd/dist/antd.css';
import './main-page.css';
import { Header } from '@components/header';
import { Content } from '@components/content';
import { Footer } from '@components/footer';
import { Sider } from '@components/sider';

export const MainPage: React.FC = () => {

    return (
        <div className='app-wrapper'>
            <Sider />
            <div className="app-content">
                <Header />
                <Content />
                <Footer />
            </div>
        </div>
    );
};

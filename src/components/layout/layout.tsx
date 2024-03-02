import React from 'react';

import './layout.css';
import { Outlet } from 'react-router-dom';
import { Sider } from '@components/sider';
import { Header } from '@components/header';
import { Footer } from '@components/footer';

export const Layout: React.FC = () => {

    return (
        <div className='app-wrapper'>
            <Sider />
            <div className="app-content">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

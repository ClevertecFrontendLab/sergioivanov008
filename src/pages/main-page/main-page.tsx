import React from 'react';

import 'antd/dist/antd.css';
import './main-page.css';
import { Layout } from 'antd';
import { MenuSwitch } from '@components/menu-switch';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { MenuLogo } from '@components/menu-logo';
import { Navigation } from '@components/navigation';
import { MenuExit } from '@components/menu-exit';
import { Header } from '@components/header';
import { Content } from '@components/content';
import { Footer } from '@components/footer';

const { Sider } = Layout;

export const MainPage: React.FC = () => {
    const collapsed = useAppSelector(state => state.aside.isAsideCollapsed);

    return (
        <Layout>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                width={208}
                collapsedWidth={64}
            >
                <div className="sider-wrapper">
                    <MenuLogo />
                    <Navigation collapsed={collapsed} />
                </div>
                <MenuExit />
                <MenuSwitch />
            </Sider>
            <Layout className="site-layout">
                <Header />
                <Content />
                <Footer />
            </Layout>
        </Layout>
    );
};

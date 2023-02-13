import { Outlet } from 'react-router-dom';

import { Footer } from '../footer';
import { Header } from '../header';
import { Menu } from '../menu';

import './layout.css';

export const Layout = () => (
<div className='main-page'>
    <Header />
    <main className='main-content'>
        <Menu />
        <Outlet />
    </main>
    <Footer />
</div>
);

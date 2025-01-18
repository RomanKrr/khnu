import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';

const Layout = () => {
    return (
        <div>
            <Header />
            {/* <Breadcrumbs /> */}
            <div className="main-content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
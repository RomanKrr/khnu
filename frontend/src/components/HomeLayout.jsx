import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import Footer from './Footer/Footer';

const HomeLayout = () => {
    return (
        <div>
            <section className="main-content">
                <Header/>
                <Banner/>
                <Breadcrumbs/>
                <Outlet />
                <Footer/>
            </section>
        </div>
    )
}

export default HomeLayout
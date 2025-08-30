import React from 'react';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Pages/Shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div className='flex flex-col min-h-screen mx-60 dm-sans'>
            <div className='mb-25'>
                <Navbar></Navbar>
            </div>

            <div className='grow'>
                <Outlet></Outlet>
            </div>

            <div className='mt-25'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default RootLayout;
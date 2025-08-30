import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div className='space-y-15'>
            <Banner></Banner>
            <div className="divider mb-10"></div>
            <Blogs></Blogs>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;
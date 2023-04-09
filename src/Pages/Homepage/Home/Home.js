import React from 'react';
import About from './About';
import Banner from './Banner';
import NewsTicker from './NewsSticker';

const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <NewsTicker items={['Breaking news!', 'Latest headlines', 'News update']} />
            <About></About>
        </div>
    );
};

export default Home;
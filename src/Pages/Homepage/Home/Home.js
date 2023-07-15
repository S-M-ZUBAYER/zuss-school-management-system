import React, { useContext, useState } from 'react';
import About from './About';
import Banner from './Banner';
import NewsTicker from './NewsSticker';
import { AuthContext } from '../../../context/UserContext';
import ShortOverView from '../ShortOverView';
import Review from '../Review';

const Home = () => {
    const { currentSchoolCode } = useContext(AuthContext);
    const [currentShool, setCurrentSchool] = useState(null)
    fetch(`https://zuss-school-management-system-server.vercel.app/api/schools/school/${currentSchoolCode}`)
        .then(response => response.json())
        .then(data => {
            // Process the data or do something with it
            setCurrentSchool(data)
        })
        .catch(error => {
            console.error('Error fetching school information:', error);
        });
    return (
        <div>
            <Banner
                currentShool={currentShool}
            ></Banner>
            <NewsTicker items={['Breaking news!', 'Latest headlines', 'News update']} />
            <About
                currentShool={currentShool}
            ></About>

            <ShortOverView></ShortOverView>

            <Review></Review>
        </div>
    );
};

export default Home;
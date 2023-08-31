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
    fetch(`http://localhost:5000/api/schools/school/${currentSchoolCode}`)
        .then(response => response.json())
        .then(data => {
            // Process the data or do something with it
            setCurrentSchool(data)
        })
        .catch(error => {
            console.error('Error fetching school information:', error);
        });
    return (
        <div className=''>
            <Banner
                currentShool={currentShool}
            ></Banner>
            <NewsTicker newsItems={['Breaking news!', 'Latest headlines', 'News update', 'skfjlsakdjflakdsf', 'kdsjflajs flasjfsadkfda', 'sdjfasdfjlasfjls']} />
            <About
                currentShool={currentShool}
            ></About>

            <ShortOverView></ShortOverView>

            <Review></Review>
        </div>
    );
};

export default Home;
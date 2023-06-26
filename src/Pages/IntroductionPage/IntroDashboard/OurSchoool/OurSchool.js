import React, { useContext, useState } from 'react';
import OurTeam from './OurTeam';
import { AuthContext } from '../../../../context/UserContext';


function OurSchool() {
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
        <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">About Our School</h2>
            <div className="container mx-auto">
                <div className=" flex justify-evenly items-center">
                    <div className="flex items-center justify-center">
                        {/* <img className="h-4/6 rounded-2xl shadow-lg" src={currentShool?.schoolBannerImg} alt="" /> */}
                        <img className="w-4/6 rounded-2xl shadow-lg" src={currentShool?.schoolBannerImg} alt="" />
                    </div>
                    <div className="px-20 flex items-center">
                        <p className=" text-white">{currentShool?.aboutSchool}</p>
                    </div>
                </div>
                <OurTeam />
            </div>
        </div>
    );
}

export default OurSchool;

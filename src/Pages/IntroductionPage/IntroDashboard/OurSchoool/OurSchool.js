import React, { useContext, useState } from 'react';
import OurTeam from './OurTeam';
import { AuthContext } from '../../../../context/UserContext';
import About from '../../../Homepage/Home/About';


function OurSchool() {
    const { currentSchoolCode } = useContext(AuthContext);
    const [currentShool, setCurrentSchool] = useState(null)
    fetch(`https://school-management-system-server-site.vercel.app/api/schools/school/${currentSchoolCode}`)
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
            <div className="bg-gradient-to-l from-blue-900 via-slate-900 to-black text-slate-100 lg:px-24">
                <h1 className="pt-10 text-3xl md:text-5xl font-bold text-yellow-300">About Us</h1>
                <div className="grid grid-cols-2 gap-8 mt-20">
                    <div className="flex items-center">
                        <img className="w-5/6 md:w-4/6 rounded-2xl shadow-lg" src={currentShool?.schoolBannerImg} alt="" />
                    </div>
                    <div className="flex items-center">
                        <p className=" text-white">{currentShool?.aboutSchool}</p>
                    </div>

                </div>

                <OurTeam />
            </div>
        </div>
    );
}

export default OurSchool;

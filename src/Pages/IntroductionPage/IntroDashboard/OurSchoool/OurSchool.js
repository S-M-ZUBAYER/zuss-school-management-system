import React from 'react';
import About from '../About';
import Video from './SchoolVideo';
import img from "../../../../Assets/Images/School_img.jpg"
import OurTeam from './OurTeam';


function OurSchool() {
    return (
        <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">About Our School</h2>
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-4 my-8">
                    <img className="rounded-lg h-4/5 mx-auto" src={img} alt="" />

                    <About />
                </div>
                <Video />
                <OurTeam />
            </div>
        </div>
    );
}

export default OurSchool;

import React from 'react';
import img from "../../../Assets/Images/School_img.jpg"

const About = ({ currentShool }) => {
    return (
        <div className="bg-gradient-to-l from-blue-900 via-slate-900 to-black text-slate-100">
            <h1 className="pt-20 text-3xl font-bold text-yellow-300">About Us</h1>
            <div className=" flex justify-evenly items-center">
                <div className="flex items-center justify-center mt-10">
                    {/* <img className="h-4/6 rounded-2xl shadow-lg" src={currentShool?.schoolBannerImg} alt="" /> */}
                    <img className="w-4/6 rounded-2xl shadow-lg" src={currentShool?.schoolBannerImg} alt="" />
                </div>
                <div className="px-20 flex items-center">
                    <p className=" text-white">{currentShool?.aboutSchool}</p>
                </div>
            </div>

        </div>
    );
};

export default About;
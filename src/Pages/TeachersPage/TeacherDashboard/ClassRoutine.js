import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const ClassRoutine = () => {

    const { schoolName } = useContext(AuthContext);
    return (
        <div>
            <div className="border-4 m-4">
                <div className="">
                    <h1 className=" text-xl font-bold text-lime-200 mt-2">{schoolName}</h1>
                    <h2 className=" text-xl font-bold text-lime-400 mt-1">Class Schedule</h2>
                    <div className=" mt-1">
                        <p className="text-lg font-semibold text-yellow-200">Section:
                            <input className="w-32 bg-inherit"></input>
                        </p>
                        <p className="text-lg font-semibold text-yellow-200">Class:
                            <input className="w-20 bg-inherit"></input>
                        </p>
                    </div>
                    <div className="mt-5 w-full flex justify-start items-center">
                        <div className="w-24 text-white">
                            <p className="w-full h-20 border-2 px-2 py-2">Day/Time</p>
                            <p className="w-full h-20 border-2 px-2 py-2">Monday</p>
                            <p className="w-full h-20 border-2 px-2 py-2">Wednesday</p>
                            <p className="w-full h-20 border-2 px-2 py-2">Tuesday</p>
                            <p className="w-full h-20 border-2 px-2 py-2">Thursday</p>
                            <p className="w-full h-20 border-2 px-2 py-2">Friday</p>
                            <p className="w-full h-20 border-2 px-2 py-2">Saturday</p>
                            <p className="w-full h-20 border-2 px-2 py-2">Sunday</p>
                        </div>
                        <div className="text-black font-semibold">
                            <div className="w-full border-2 h-20 border-1 flex justify-center items-center ">
                                <textarea className=" bg-inherit text-center w-full h-full bg-blue-200 " placeholder="Date & Sub"></textarea>
                            </div>
                            <div className="w-full border-2 h-20 border-1 flex justify-center items-center ">
                                <textarea className=" bg-inherit text-center w-full h-full bg-blue-200 " placeholder="Date & Sub"></textarea>
                            </div>
                            <div className="w-full border-2 h-20 border-1 flex justify-center items-center ">
                                <textarea className=" bg-inherit text-center w-full h-full bg-blue-200 " placeholder="Date & Sub"></textarea>
                            </div>
                            <div className="w-full border-2 h-20 border-1 flex justify-center items-center ">
                                <textarea className=" bg-inherit text-center w-full h-full bg-blue-200 " placeholder="Date & Sub"></textarea>
                            </div>
                            <div className="w-full border-2 h-20 border-1 flex justify-center items-center ">
                                <textarea className=" bg-inherit text-center w-full h-full bg-blue-200 " placeholder="Date & Sub"></textarea>
                            </div>
                            <div className="w-full border-2 h-20 border-1 flex justify-center items-center ">
                                <textarea className=" bg-inherit text-center w-full h-full bg-blue-200 " placeholder="Date & Sub"></textarea>
                            </div>
                            <div className="w-full border-2 h-20 border-1 flex justify-center items-center ">
                                <textarea className=" bg-inherit text-center w-full h-full bg-blue-200 " placeholder="Date & Sub"></textarea>
                            </div>
                            <div className="w-full border-2 h-20 border-1 flex justify-center items-center ">
                                <textarea className=" bg-inherit text-center w-full h-full bg-blue-200 " placeholder="Date & Sub"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ClassRoutine;
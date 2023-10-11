
import React, { useContext, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../context/UserContext';
import DisplaySpinner from '../../Shared/Spinners/DisplaySpinner';
import html2canvas from 'html2canvas';
import { FaCloudDownloadAlt } from 'react-icons/fa';


const ClassRoutine = () => {
    const { schoolName, currentSchoolCode } = useContext(AuthContext);
    const year = new Date().getFullYear();
    const schoolCode = currentSchoolCode;
    const [classRoutines, setClassRoutines] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://zuss-school-management-system-server-site.vercel.app/api/classRoutine', {
                    params: { year, schoolCode: currentSchoolCode },
                });

                setClassRoutines(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error('Error fetching class routines:', error);
            }
        };

        fetchData();
    }, [year, schoolCode]);

    const captureImage = async (index) => {
        if (!classRoutines[index]) {
            return;
        }

        const routine = classRoutines[index];

        try {
            const canvas = await html2canvas(document.querySelector(`#routine-${index}`));
            const image = canvas.toDataURL('image/png');

            // You can save the image or open it in a new window
            const newWindow = window.open();
            newWindow.document.write('<img src="' + image + '" width="100%"/>');
        } catch (error) {
            console.error('Error capturing image:', error);
        }
    };

    if (loading) {
        return <DisplaySpinner />;
    }

    return (
        <div>
            <div className="text-white">
                {classRoutines.map((routine, index) => (
                    <div key={index} id={`routine-${index}`} className=" relative my-20 p-10 mx-10 bg-fuchsia-800 rounded-lg">
                        <h1 className="text-2xl font-bold text-green-400 text-center underline">{routine?.schoolName}</h1>
                        <h1 className="text-2xl font-bold text-green-400 text-center mb-3">Class Routine</h1>
                        <div className="flex items-center justify-evenly gap-4 mb-3 px-14">
                            <p className="font-bold text-xl">Class name: {routine?.className}</p>
                            <p className="font-bold text-xl">Class name: {routine?.sectionName}</p>
                            <p className="font-bold text-xl">Class name: {routine?.shiftName}</p>
                        </div>
                        {/* <button className=" absolute top-0 right-0" onClick={() => captureImage(index)}><FaCloudDownloadAlt className="text-lime-400 text-lg font-bold"></FaCloudDownloadAlt></button> */}
                        <button className=" bg-lime-300 text-green-900 px-2 py-1 rounded-lg absolute top-[-33px] right-0" onClick={() => captureImage(index)}>Download</button>
                        <div>
                            <div className="flex justify-center items-center">
                                <p className="w-24 h-24 border-2 flex items-center justify-center">MonDay</p>
                                <div className="flex">
                                    {
                                        ((routine?.routine)?.Monday).map(day => {
                                            return <div className="w-40 h-24 border-2 flex justify-center items-center">
                                                <div>
                                                    <p>{day?.subject}</p>
                                                    <p>{day?.time}</p>
                                                </div>

                                            </div>

                                        })
                                    }
                                </div>

                            </div>
                            <div className="flex justify-center items-center">
                                <p className="w-24 h-24 border-2 flex items-center justify-center">Tuesday</p>
                                <div className="flex">
                                    {
                                        ((routine?.routine)?.Tuesday).map(day => {
                                            return <div className="w-40 h-24 border-2 flex justify-center items-center">
                                                <div>
                                                    <p>{day?.subject}</p>
                                                    <p>{day?.time}</p>
                                                </div>

                                            </div>

                                        })
                                    }
                                </div>

                            </div>
                            <div className="flex justify-center items-center">
                                <p className="w-24 h-24 border-2 flex items-center justify-center">Wednesday</p>
                                <div className="flex">
                                    {
                                        ((routine?.routine)?.Wednesday).map(day => {
                                            return <div className="w-40 h-24 border-2 flex justify-center items-center">
                                                <div>
                                                    <p>{day?.subject}</p>
                                                    <p>{day?.time}</p>
                                                </div>

                                            </div>

                                        })
                                    }
                                </div>

                            </div>
                            <div className="flex justify-center items-center">
                                <p className="w-24 h-24 border-2 flex items-center justify-center">Thursday</p>
                                <div className="flex">
                                    {
                                        ((routine?.routine)?.Thursday).map(day => {
                                            return <div className="w-40 h-24 border-2 flex justify-center items-center">
                                                <div>
                                                    <p>{day?.subject}</p>
                                                    <p>{day?.time}</p>
                                                </div>

                                            </div>

                                        })
                                    }
                                </div>

                            </div>
                            <div className="flex justify-center items-center">
                                <p className="w-24 h-24 border-2 flex items-center justify-center">Friday</p>
                                <div className="flex">
                                    {
                                        ((routine?.routine)?.Friday).map(day => {
                                            return <div className="w-40 h-24 border-2 flex justify-center items-center">
                                                <div>
                                                    <p>{day?.subject}</p>
                                                    <p>{day?.time}</p>
                                                </div>

                                            </div>

                                        })
                                    }
                                </div>

                            </div>
                            <div className="flex justify-center items-center">
                                <p className="w-24 h-24 border-2 flex items-center justify-center">Saturday</p>
                                <div className="flex">
                                    {
                                        ((routine?.routine)?.Saturday).map(day => {
                                            return <div className="w-40 h-24 border-2 flex justify-center items-center">
                                                <div>
                                                    <p>{day?.subject}</p>
                                                    <p>{day?.time}</p>
                                                </div>

                                            </div>

                                        })
                                    }
                                </div>

                            </div>
                            <div className="flex justify-center items-center">
                                <p className="w-24 h-24 border-2 flex items-center justify-center">Sunday</p>
                                <div className="flex">
                                    {
                                        ((routine?.routine)?.Sunday).map(day => {
                                            return <div className="w-40 h-24 border-2 flex justify-center items-center">
                                                <div>
                                                    <p>{day?.subject}</p>
                                                    <p>{day?.time}</p>
                                                </div>

                                            </div>

                                        })
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClassRoutine;

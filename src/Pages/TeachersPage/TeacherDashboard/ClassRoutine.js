import React, { useContext, useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../context/UserContext';

const ClassRoutine = () => {

    const { schoolName, currentSchoolCode } = useContext(AuthContext);

    const year = new Date().getFullYear();
    const schoolCode = currentSchoolCode;
    const [classRoutines, setClassRoutines] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://zuss-school-management-system-server-site.vercel.app/api/classRoutine', {
                    params: { year, schoolCode: currentSchoolCode },
                });

                setClassRoutines(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching class routines:', error);
            }
        };

        fetchData();
    }, [year, schoolCode]);

    function handleCloneClick() {
        const node = document.getElementById("original-div")
        const clone = node.cloneNode(true);
        const targetDiv = document.getElementById("target-div")
        targetDiv.appendChild(clone)
    }



    const divRef = useRef();

    const handlePrint = () => {
        const printableContent = divRef.current.innerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printableContent;
        window.print();
        document.body.innerHTML = originalContents;
    };

    return (
        <div>
            <button onClick={handlePrint}>Download</button>
            {/* <div ref={divRef} className=" m-4 bg-gradient-to-l from-blue-900 via-slate-900 to-black ">
                <div className="">
                    <h1 className=" text-xl font-bold text-lime-200 mt-2">{schoolName}</h1>
                    <h2 className=" text-xl font-bold text-lime-400 mt-1 ">Class Schedule</h2>
                    <div className=" mt-1">
                        <p className="text-lg font-semibold text-yellow-200">Section:
                            <input className="w-32 bg-inherit"></input>
                        </p>
                        <p className="text-lg font-semibold text-yellow-200">Class:
                            <input className="w-20 bg-inherit"></input>
                        </p>
                    </div>
                    <div className="flex justify-center ">
                        <div id="target-div" className="mt-5 flex justify-start items-center">
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
                            <div id="original-div" className="text-black text-sm font-semibold">
                                <div className="w-full border-2 h-20 border-1 flex justify-center items-center bg-lime-200 ">
                                    <textarea className=" bg-inherit text-center w-full h-full resize-none" placeholder="Time & Sub"></textarea>
                                </div>
                                <div className="w-full border-2 h-20 border-1 flex justify-center items-center bg-lime-200 ">
                                    <textarea className=" bg-inherit text-center w-full h-full resize-none " placeholder="Time & Sub"></textarea>
                                </div>
                                <div className="w-full border-2 h-20 border-1 flex justify-center items-center bg-lime-200 ">
                                    <textarea className=" bg-inherit text-center w-full h-full resize-none " placeholder="Time & Sub"></textarea>
                                </div>
                                <div className="w-full border-2 h-20 border-1 flex justify-center items-center bg-lime-200 ">
                                    <textarea className=" bg-inherit text-center w-full h-full resize-none " placeholder="Time & Sub"></textarea>
                                </div>
                                <div className="w-full border-2 h-20 border-1 flex justify-center items-center bg-lime-200 ">
                                    <textarea className=" bg-inherit text-center w-full h-full resize-none " placeholder="Time & Sub"></textarea>
                                </div>
                                <div className="w-full border-2 h-20 border-1 flex justify-center items-center bg-lime-200 ">
                                    <textarea className=" bg-inherit text-center w-full h-full resize-none " placeholder="Time & Sub"></textarea>
                                </div>
                                <div className="w-full border-2 h-20 border-1 flex justify-center items-center bg-lime-200 ">
                                    <textarea className=" bg-inherit text-center w-full h-full resize-none " placeholder="Time & Sub"></textarea>
                                </div>
                                <div className="w-full border-2 h-20 border-1 flex justify-center items-center bg-lime-200 ">
                                    <textarea className=" bg-inherit text-center w-full h-full resize-none " placeholder="Time & Sub"></textarea>
                                </div>
                            </div>
                        </div>
                        <button id='AddBtn' className="bg-emerald-400 w-6 h-6 rounded-full text-xl font-bold flex justify-center items-center" onClick={handleCloneClick}>+</button>
                    </div>




                </div>
            </div> */}

            <div className="text-white ">
                {
                    classRoutines.map(routine => {
                        return <div ref={divRef} className="my-10 p-10 mx-10 bg-fuchsia-800 rounded-lg">
                            <h1 className="text-2xl font-bold text-green-400 text-center underline">{routine?.schoolName}</h1>
                            <h1 className="text-2xl font-bold text-green-400 text-center  mb-3">Class Routine</h1>
                            <div className="flex items-center justify-evenly gap-4 mb-3 px-14">
                                <p className="font-bold text-xl">Class name: {routine?.className}</p>
                                <p className="font-bold  text-xl">Class name: {routine?.sectionName}</p>
                                <p className="font-bold text-xl">Class name: {routine?.shiftName}</p>
                            </div>
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
                                <p className="w-24 h-24 border-2 flex items-center justify-center">MonDay</p>
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
                                <p className="w-24 h-24 border-2 flex items-center justify-center">MonDay</p>
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
                                <p className="w-24 h-24 border-2 flex items-center justify-center">MonDay</p>
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
                                <p className="w-24 h-24 border-2 flex items-center justify-center">MonDay</p>
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
                                <p className="w-24 h-24 border-2 flex items-center justify-center">MonDay</p>
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
                                <p className="w-24 h-24 border-2 flex items-center justify-center">MonDay</p>
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
                    })
                }
            </div>


        </div >
    );
};

export default ClassRoutine;


// import React, { useContext, useState, useRef } from 'react';
// import { AuthContext } from '../../../AuthProvider/AuthProvider';
// import html2canvas from 'html2canvas';
// import { saveAs } from 'file-saver';

// const ClassRoutine = () => {
//     const { schoolName } = useContext(AuthContext);
//     const [timeSubValues, setTimeSubValues] = useState(['Sub&Time', '', '', '', '', '', '', '']);

//     function handleCloneClick() {
//         if (timeSubValues.length < 14) {
//             const node = document.getElementById('original-div');
//             const clone = node.cloneNode(true);
//             const targetDiv = document.getElementById('target-div');
//             targetDiv.appendChild(clone);
//             setTimeSubValues((prevValues) => [...prevValues, '']);
//         }
//     }

//     const divRef = useRef();

//     const handlePrint = () => {
//         const printableContent = divRef.current.innerHTML;
//         const originalContents = document.body.innerHTML;
//         document.body.innerHTML = printableContent;
//         window.print();
//         document.body.innerHTML = originalContents;
//     };

//     const handleTimeSubChange = (index, value) => {
//         const updatedTimeSubValues = [...timeSubValues];
//         updatedTimeSubValues[index] = value;
//         setTimeSubValues(updatedTimeSubValues);
//     };

//     return (
//         <div>
//             <button onClick={handlePrint}>Print</button>
//             <div ref={divRef} className="m-4 bg-gradient-to-l from-blue-900 via-slate-900 to-black">
//                 <div className="">
//                     <h1 className="text-xl font-bold text-lime-200 mt-2">{schoolName}</h1>
//                     <h2 className="text-xl font-bold text-lime-400 mt-1">Class Schedule</h2>
//                     <div className="mt-1">
//                         <p className="text-lg font-semibold text-yellow-200">
//                             Section:
//                             <input className="w-32 bg-inherit" />
//                         </p>
//                         <p className="text-lg font-semibold text-yellow-200">
//                             Class:
//                             <input className="w-20 bg-inherit" />
//                         </p>
//                     </div>
//                     <div className="flex justify-center ">
//                         <div id="target-div" className="flex justify-start items-center">
//                             <div className="w-24 text-white">
//                                 <p className="w-full h-20 border-2 px-2 py-2">Day/Time</p>
//                                 <p className="w-full h-20 border-2 px-2 py-2">Monday</p>
//                                 <p className="w-full h-20 border-2 px-2 py-2">Wednesday</p>
//                                 <p className="w-full h-20 border-2 px-2 py-2">Tuesday</p>
//                                 <p className="w-full h-20 border-2 px-2 py-2">Thursday</p>
//                                 <p className="w-full h-20 border-2 px-2 py-2">Friday</p>
//                                 <p className="w-full h-20 border-2 px-2 py-2">Saturday</p>
//                                 <p className="w-full h-20 border-2 px-2 py-2">Sunday</p>
//                             </div>
//                             <div id="original-div" className="text-black text-sm font-semibold">
//                                 {timeSubValues.map((value, index) => (
//                                     <div
//                                         key={index}
//                                         className="w-full border-2 h-20 border-1 flex justify-center items-center bg-lime-200 "
//                                     >
//                                         <textarea
//                                             className="bg-inherit text-center w-full h-full resize-none"
//                                             value={value}
//                                             onChange={(e) =>
//                                                 handleTimeSubChange(index, e.target.value)
//                                             }
//                                         ></textarea>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <button
//                             id="AddBtn"
//                             className={`bg-emerald-400 w-6 h-6 rounded-full text-xl font-bold flex justify-center items-center ${timeSubValues.length >= 14 ? 'opacity-50 cursor-not-allowed' : ''
//                                 }`}
//                             onClick={handleCloneClick}
//                             disabled={timeSubValues.length >= 14}
//                         >
//                             +
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ClassRoutine;



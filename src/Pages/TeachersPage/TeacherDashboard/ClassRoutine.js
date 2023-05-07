import React, { useContext, useState, useRef } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const ClassRoutine = () => {

    const { schoolName } = useContext(AuthContext);

    function handleCloneClick() {
        const node = document.getElementById("original-div")
        const clone = node.cloneNode(true);
        const targetDiv = document.getElementById("target-div")
        targetDiv.appendChild(clone)
    }

    const divRef = useRef(null);

    function handleDownloadClick() {
        const addBtn = document.getElementById("AddBtn");
        addBtn.classList.add("hidden")
        html2canvas(divRef.current).then(canvas => {
            canvas.toBlob(blob => {
                saveAs(blob, 'div.png');
            });
        });
        addBtn.classList.remove("hidden")
    }


    return (
        <div>
            <button onClick={handleDownloadClick}>Download</button>
            <div ref={divRef} className=" m-4 bg-gradient-to-l from-blue-900 via-slate-900 to-black ">
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
            </div>
        </div >
    );
};

export default ClassRoutine;
import React, { useContext, useState, useRef } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import html2canvas from 'html2canvas';
import html2pdf from "html2pdf.js";
import { saveAs } from 'file-saver';

const AddResultCalculation = () => {

    const [inputValues, setInputValues] = useState([]);

    const students = [
        {
            "id": 123,
            "name": "John Doe"
        },
        {
            "id": 456,
            "name": "Jane Smith"
        },
        {
            "id": 34789,
            "name": "Sabit Banani"
        },
        {
            "id": 78339,
            "name": "S M Zubayer"
        },
        {
            "id": 78933,
            "name": "Abu Sayed"
        },
        {
            "id": 3433,
            "name": "Abu Jor"
        },
    ]

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

    function generatePDF(divId) {
        const btnElement = document.getElementById("btnId");
        const closeElement = document.getElementById("AddBtn");
        btnElement.classList.add("hidden")
        closeElement.classList.add("hidden")
        const element = document.getElementById(divId);

        const opt = {
            margin: 0.5,
            filename: "result.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };
        html2pdf().set(opt).from(element).save();

    }


    const handleToChange = (e) => {
        const { className, value } = e.target;
        const inputs = document?.querySelectorAll(`.${className}`);
        const values = Array?.from(inputs)?.map((input) => input.value);
        setInputValues(values);
        console.log(value)
    }

    const handleToCalculate = () => {

    }


    return (
        <div>
            <button className="bg-red-300 py-1 px-3 rounded-lg ml-10" id="btnId" onClick={() => generatePDF("resultSheet")}>Download PDF</button>
            <div ref={divRef} className=" m-4 bg-gradient-to-l from-blue-900 via-slate-900 to-black ">
                <div className="">
                    <h1 className=" text-xl font-bold text-lime-200 mt-2">{schoolName}</h1>
                    <h2 className=" text-xl font-bold text-lime-400 mt-1">Add & Result Calculation</h2>
                    <div id='resultSheet' className="bg-black">


                        <div className=" mt-1">
                            <p className="text-lg font-semibold text-yellow-200">Section:
                                <input className="w-32 bg-inherit"></input>
                            </p>
                            <p className="text-lg font-semibold text-yellow-200">Class:
                                <input className="w-16 bg-inherit"></input>
                            </p>
                        </div>
                        <div className="flex justify-center ">
                            <div id="target-div" className="mt-5 flex justify-start items-center">
                                <div className="w-32 text-white">
                                    <p className="w-full h-14 border-2 px-2 py-2">Student ID</p>
                                    {
                                        students.map((element, index) => <p key={index} className="w-full h-14 border-2 px-2 py-2">{element.id}</p>
                                        )
                                    }

                                </div>
                                <div className="w-56 text-white">
                                    <p className="w-full h-14 border-2 px-2 py-2">Student Name</p>
                                    {
                                        students.map((element, index) => <p key={index} className="w-full h-14 border-2 px-2 py-2">{element.name}</p>
                                        )
                                    }

                                </div>
                                <div id="original-div" className="text-white w-16 text-sm font-semibold">
                                    <div className="w-full border-2 h-14 border-1 flex justify-center items-center">
                                        <textarea className=" bg-inherit text-center w-full h-full resize-none" placeholder="Subject Name"></textarea>
                                    </div>
                                    {
                                        students.map((element, index) => <div className="w-full border-2 h-14 border-1 flex justify-center items-center text-black bg-sky-300 ">
                                            <textarea onClick={handleToChange} className={`bg-inherit text-center w-full h-full resize-none ${element?.id}`} placeholder="Mark"></textarea>
                                        </div>
                                        )
                                    }



                                </div>
                            </div>

                            <button id='AddBtn' className="bg-emerald-400 w-6 h-6 rounded-full text-xl font-bold flex justify-center items-center" onClick={handleCloneClick}>+</button>
                            <div className="w-16 mt-5  text-white">
                                <p className="w-full h-14 border-2 px-2 py-2">Total</p>
                                {
                                    students.map((element, index) => <p key={index} className="w-full h-14 bg-teal-300 text-black border-2 px-2 py-2">00</p>
                                    )
                                }

                            </div>
                            <div className="w-16 mt-5 text-white">
                                <p className="w-full h-14 border-2 px-2 py-2">Grade</p>
                                {
                                    students.map((element, index) => <p key={index} className="w-full h-14 bg-lime-300 text-black border-2 px-2 py-2">None</p>
                                    )
                                }

                            </div>


                            <button onClick={handleToCalculate} className="border-2 py-1 px-4 bg-lime-100">Calculate</button>
                        </div>

                    </div>



                </div>
            </div>
        </div >
    );
};

export default AddResultCalculation;
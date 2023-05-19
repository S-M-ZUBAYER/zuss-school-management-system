// import React, { useContext, useState, useRef } from 'react';
// import { AuthContext } from '../../../AuthProvider/AuthProvider';
// import html2canvas from 'html2canvas';
// import html2pdf from "html2pdf.js";
// import { saveAs } from 'file-saver';

// const AddResultCalculation = () => {

//     const [inputValues, setInputValues] = useState([]);

//     const students = [
//         {
//             "id": 123,
//             "name": "John Doe"
//         },
//         {
//             "id": 456,
//             "name": "Jane Smith"
//         },
//         {
//             "id": 34789,
//             "name": "Sabit Banani"
//         },
//         {
//             "id": 78339,
//             "name": "S M Zubayer"
//         },
//         {
//             "id": 78933,
//             "name": "Abu Sayed"
//         },
//         {
//             "id": 3433,
//             "name": "Abu Jor"
//         },
//     ]

//     const { schoolName } = useContext(AuthContext);

//     function handleCloneClick() {
//         const node = document.getElementById("original-div")
//         const clone = node.cloneNode(true);
//         const targetDiv = document.getElementById("target-div")
//         targetDiv.appendChild(clone)
//     }

//     const divRef = useRef(null);

//     function handleDownloadClick() {
//         const addBtn = document.getElementById("AddBtn");
//         addBtn.classList.add("hidden")
//         html2canvas(divRef.current).then(canvas => {
//             canvas.toBlob(blob => {
//                 saveAs(blob, 'div.png');
//             });
//         });
//         addBtn.classList.remove("hidden")
//     }

//     function generatePDF(divId) {
//         const btnElement = document.getElementById("btnId");
//         const closeElement = document.getElementById("AddBtn");
//         btnElement.classList.add("hidden")
//         closeElement.classList.add("hidden")
//         const element = document.getElementById(divId);

//         const opt = {
//             margin: 0.5,
//             filename: "result.pdf",
//             image: { type: "jpeg", quality: 0.98 },
//             html2canvas: { scale: 2 },
//             jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
//         };
//         html2pdf().set(opt).from(element).save();

//     }


//     const handleToChange = (e) => {
//         const { className, value } = e.target;
//         const inputs = document?.querySelectorAll(`.${className}`);
//         const values = Array?.from(inputs)?.map((input) => input.value);
//         setInputValues(values);
//         console.log(value)
//     }

//     const handleToCalculate = () => {

//     }


//     return (
//         <div>
//             <button className="bg-red-300 py-1 px-3 rounded-lg ml-10" id="btnId" onClick={() => generatePDF("resultSheet")}>Download PDF</button>
//             <div ref={divRef} className=" m-4 bg-gradient-to-l from-blue-900 via-slate-900 to-black ">
//                 <div className="">
//                     <h1 className=" text-xl font-bold text-lime-200 mt-2">{schoolName}</h1>
//                     <h2 className=" text-xl font-bold text-lime-400 mt-1">Add & Result Calculation</h2>
//                     <div id='resultSheet' className="bg-black">


//                         <div className=" mt-1">
//                             <p className="text-lg font-semibold text-yellow-200">Section:
//                                 <input className="w-32 bg-inherit"></input>
//                             </p>
//                             <p className="text-lg font-semibold text-yellow-200">Class:
//                                 <input className="w-16 bg-inherit"></input>
//                             </p>
//                         </div>
//                         <div className="flex justify-center ">
//                             <div id="target-div" className="mt-5 flex justify-start items-center">
//                                 <div className="w-32 text-white">
//                                     <p className="w-full h-14 border-2 px-2 py-2">Student ID</p>
//                                     {
//                                         students.map((element, index) => <p key={index} className="w-full h-14 border-2 px-2 py-2">{element.id}</p>
//                                         )
//                                     }

//                                 </div>
//                                 <div className="w-56 text-white">
//                                     <p className="w-full h-14 border-2 px-2 py-2">Student Name</p>
//                                     {
//                                         students.map((element, index) => <p key={index} className="w-full h-14 border-2 px-2 py-2">{element.name}</p>
//                                         )
//                                     }

//                                 </div>
//                                 <div id="original-div" className="text-white w-16 text-sm font-semibold">
//                                     <div className="w-full border-2 h-14 border-1 flex justify-center items-center">
//                                         <textarea className=" bg-inherit text-center w-full h-full resize-none" placeholder="Subject Name"></textarea>
//                                     </div>
//                                     {
//                                         students.map((element, index) => <div className="w-full border-2 h-14 border-1 flex justify-center items-center text-black bg-sky-300 ">
//                                             <textarea onClick={handleToChange} className={`bg-inherit text-center w-full h-full resize-none ${element?.id}`} placeholder="Mark"></textarea>
//                                         </div>
//                                         )
//                                     }



//                                 </div>
//                             </div>

//                             <button id='AddBtn' className="bg-emerald-400 w-6 h-6 rounded-full text-xl font-bold flex justify-center items-center" onClick={handleCloneClick}>+</button>
//                             <div className="w-16 mt-5  text-white">
//                                 <p className="w-full h-14 border-2 px-2 py-2">Total</p>
//                                 {
//                                     students.map((element, index) => <p key={index} className="w-full h-14 bg-teal-300 text-black border-2 px-2 py-2">00</p>
//                                     )
//                                 }

//                             </div>
//                             <div className="w-16 mt-5 text-white">
//                                 <p className="w-full h-14 border-2 px-2 py-2">Grade</p>
//                                 {
//                                     students.map((element, index) => <p key={index} className="w-full h-14 bg-lime-300 text-black border-2 px-2 py-2">None</p>
//                                     )
//                                 }

//                             </div>


//                             <button onClick={handleToCalculate} className="border-2 py-1 px-4 bg-lime-100">Calculate</button>
//                         </div>

//                     </div>



//                 </div>
//             </div>
//         </div >
//     );
// };

// export default AddResultCalculation;


import React, { useState } from 'react';

const AddResultCalculation = () => {
    const [rollNo, setRollNo] = useState('');
    const [name, setName] = useState('');
    const [className, setClassName] = useState('Class 1');
    const [subjectName, setSubjectName] = useState('');
    const [result, setResult] = useState('');
    const [students, setStudents] = useState([]);
    const [totalResult, setTotalResult] = useState(0);
    const [avgResult, setAvgResult] = useState(0);

    const addResult = () => {
        const existingStudent = students.find(student => student.rollNo === rollNo && student.className === className);

        if (existingStudent) {
            existingStudent.subjects.push({ subjectName, result });
        } else {
            const newStudent = {
                rollNo,
                name,
                className,
                subjects: [{ subjectName, result }],
            };
            setStudents([...students, newStudent]);
        }

        setRollNo('');
        setName('');
        setClassName('Class 1');
        setSubjectName('');
        setResult('');
    };

    const calculateResults = () => {
        students.forEach(student => {
            let totalResult = 0;
            student.subjects.forEach(subject => {
                totalResult += parseInt(subject.result);
            });
            student.totalResult = totalResult;
            setTotalResult(totalResult)
            student.averageResult = totalResult / student.subjects.length;
            setAvgResult(student.averageResult)
        });
    };
    console.log(students)

    return (
        <div className="text-white text-lg">
            <h2 className="text-3xl font-bold mt-20 mb-10 text-amber-200">Add The Result Information</h2>
            <div cla>
                <label>
                    Roll No:
                    <input className="text-black ml-2 pl-1" type="text" placeholder="Roll No" value={rollNo} onChange={e => setRollNo(e.target.value)} />
                </label>
            </div>

            <div className="mt-2">
                <label>
                    Student Name:
                    <input className="text-black ml-2 pl-1" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                </label>
            </div>

            <div className="mt-2">
                <label>
                    Class:
                </label>
                <select className="text-black ml-2 pl-1" value={className} onChange={e => setClassName(e.target.value)}>
                    {Array.from({ length: 12 }, (_, index) => (
                        <option key={index} value={`Class ${index + 1}`}>{`Class ${index + 1}`}</option>
                    ))}
                </select>
            </div>

            <div className="mt-2">
                <label>
                    Subject Name:
                    <input className="text-black ml-2 pl-1" type="text" placeholder="Subject Name" value={subjectName} onChange={e => setSubjectName(e.target.value)} />
                </label>
            </div>

            <div className="mt-2">
                <label>
                    Result:
                    <input className="text-black ml-2 pl-1" type="text" placeholder="Result" value={result} onChange={e => setResult(e.target.value)} />
                </label>
            </div>

            <button className="px-4 py-1 bg-yellow-300 text-black rounded-lg flex mx-auto my-3" onClick={addResult}>Add</button>
            <button className="px-4 py-1 bg-lime-300 text-black rounded-md inline" onClick={calculateResults}>Calculate</button>

            <h2 className="text-3xl font-bold mt-20 mb-8 text-lime-300">Show all Results</h2>
            {students.map((student, index) => (
                <div key={index} className="my-5">
                    <p>Roll No: {student.rollNo}</p>
                    <p>Name: {student.name}</p>
                    <p>Class: {student.className}</p>
                    <p>Total Result: {student.totalResult}</p>
                    <p>Average Result: {student.averageResult}</p>
                    <hr className="mt-5" />
                </div>
            ))}
        </div>
    );
};

export default AddResultCalculation;

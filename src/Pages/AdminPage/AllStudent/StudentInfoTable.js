

import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const StudentInfoTable = ({ allStudents, classInfoData, handleOpenModal, className, sectionName, shiftName, name }) => {
    const [selectedClass, setSelectedClass] = useState('');
    const [sectionSearch, setSectionSearch] = useState('');
    const [shiftSearch, setShiftSearch] = useState('');
    const [studentSearch, setStudentSearch] = useState('');

    const filteredStudents = allStudents.filter(student =>
        (!selectedClass || student.className === selectedClass) &&
        (!sectionSearch || student.section === sectionSearch) &&
        (!shiftSearch || student.shift === shiftSearch) &&
        (!studentSearch || student.name.toLowerCase().includes(studentSearch.toLowerCase()))
    );

    const classNames = classInfoData.map(classInfo => classInfo.name);
    console.log(className, sectionName, shiftName, name)
    return (
        <div>
            {/* <div>
                <input
                    type="text"
                    placeholder="Search by Class Name"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Search by Section"
                    value={sectionSearch}
                    onChange={(e) => setSectionSearch(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Search by Shift"
                    value={shiftSearch}
                    onChange={(e) => setShiftSearch(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Search by Student Name"
                    value={studentSearch}
                    onChange={(e) => setStudentSearch(e.target.value)}
                />
            </div> */}
            {classNames.map((className, index) => (
                <div className="mx-10 my-10" key={index}>
                    <h2 className="font-bold text-lime-400 underline text-3xl mt-10 mb-5">{className}</h2>
                    <table className="table w-full text-black">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Student Name</th>
                                <th>Student Id</th>
                                <th>Class Roll</th>
                                <th>Details</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents
                                .filter(student => student.className === className)
                                .map((student, studentIndex) => (
                                    <tr key={studentIndex} className="hover:bg-lime-500">
                                        <td className="">
                                            <img src={student.image} alt={student.name} className="w-9 h-9 rounded-full" />
                                        </td>
                                        <td>{student.name}</td>
                                        <td>{student.studentId}</td>
                                        <td>{student.classRoll}</td>
                                        <td>Details</td>
                                        <td onClick={() => handleOpenModal(student)}><FaEdit></FaEdit></td>
                                        <td ><MdDelete></MdDelete></td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default StudentInfoTable;


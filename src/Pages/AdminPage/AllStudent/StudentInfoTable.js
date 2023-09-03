

// import React, { useState } from 'react';
// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";

// const StudentInfoTable = ({ allStudents, classInfoData, handleOpenModal, className, sectionName, shiftName, name }) => {
//     const [selectedClass, setSelectedClass] = useState('');
//     const [sectionSearch, setSectionSearch] = useState('');
//     const [shiftSearch, setShiftSearch] = useState('');
//     const [studentSearch, setStudentSearch] = useState('');
//     console.log(allStudents, "table initail")
//     const filteredStudents = allStudents.filter(student =>
//         (!selectedClass || student.className === selectedClass) &&
//         (!sectionSearch || student.section === sectionSearch) &&
//         (!shiftSearch || student.shift === shiftSearch) &&
//         (!studentSearch || student.name.toLowerCase().includes(studentSearch.toLowerCase()))
//     );
//     console.log(filteredStudents, "fileter")
//     const classNames = classInfoData.map(classInfo => classInfo.name);
//     // console.log(className, sectionName, shiftName, name)

//     return (
//         <div>

//             {classNames.map((className, index) => (
//                 <div className="mx-10 my-10" key={index}>
//                     <h2 className="font-bold text-lime-400 underline text-3xl mt-10 mb-5">{className}</h2>
//                     <table className="table w-full text-black">
//                         <thead>
//                             <tr>
//                                 <th>Image</th>
//                                 <th>Student Name</th>
//                                 <th>Student Id</th>
//                                 <th>Class Roll</th>
//                                 <th>Details</th>
//                                 <th>Edit</th>
//                                 <th>Delete</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredStudents
//                                 .filter(student => student.className === className)
//                                 .map((student, studentIndex) => (
//                                     <tr key={studentIndex} className="hover:bg-lime-500">
//                                         <td className="">
//                                             <img src={student.image} alt={student.name} className="w-9 h-9 rounded-full" />
//                                         </td>
//                                         <td>{student.name}</td>
//                                         <td>{student.studentId}</td>
//                                         <td>{student.classRoll}</td>
//                                         <td>Details</td>
//                                         <td onClick={() => handleOpenModal(student)}><FaEdit></FaEdit></td>
//                                         <td ><MdDelete></MdDelete></td>
//                                     </tr>
//                                 ))}
//                         </tbody>
//                     </table>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default StudentInfoTable;

import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const StudentInfoTable = ({
    allStudents,
    classInfoData,
    handleOpenModal,
    handleToDelete,
    className,
    sectionName,
    shiftName,
    name,
}) => {
    // Create an array of state variables to manage attendance status for each student
    const [attendanceStatus, setAttendanceStatus] = useState(false);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const attendance = { date: currentDate, year: currentYear, status: [{ email: "email", presence: true }] }

    const classNames = classInfoData.map((classInfo) => classInfo.name);

    // Filter students based on search criteria
    const filteredStudents = allStudents.filter((student) => {
        const classNameMatch =
            !className || student.className === className;
        const sectionNameMatch =
            !sectionName || student.section === sectionName;
        const shiftNameMatch = !shiftName || student.shift === shiftName;
        const studentNameMatch = !name || student.name.toLowerCase().includes(name.toLowerCase());

        return classNameMatch && sectionNameMatch && shiftNameMatch && studentNameMatch;
    });

    const handleToggleAttendance = (student) => {
        // Create a new array with the updated attendance status for the clicked student
        // const newAttendanceStatus = [...attendanceStatus];
        // newAttendanceStatus[studentIndex] = !newAttendanceStatus[studentIndex];

        setAttendanceStatus(!attendanceStatus);
        console.log(student)
    };

    console.log(attendanceStatus)

    return (
        <div>
            {/* Display filtered students */}
            {classNames.map((className, index) => (
                <div className="mx-10 my-10" key={index}>
                    <h2 className="font-bold text-lime-400 underline text-3xl mt-10 mb-5">
                        {className}
                    </h2>
                    <table className="table w-full text-black">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Student Name</th>
                                <th>Student Id</th>
                                <th>Class Roll</th>
                                <th>Attendance</th>
                                <th>Details</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents
                                .filter((student) => student.className === className)
                                .map((student, studentIndex) => (
                                    <tr key={studentIndex} className="hover:bg-lime-500">
                                        <td className="">
                                            <img
                                                src={student.image}
                                                alt={student.name}
                                                className="w-9 h-9 rounded-full"
                                            />
                                        </td>
                                        <td>{student.name}</td>
                                        <td>{student.studentId}</td>
                                        <td>{student.classRoll}</td>
                                        <td>
                                            <button
                                                className={`px-3 py-1 rounded-lg ${attendanceStatus ? 'bg-green-300' : 'bg-yellow-300'}`}
                                                onClick={() => handleToggleAttendance(student)}
                                            >
                                                {attendanceStatus ? 'P' : 'A'}
                                            </button>
                                        </td>
                                        <td>Details</td>
                                        <td className="cursor-pointer" onClick={() => handleOpenModal(student)}>
                                            <FaEdit />
                                        </td>
                                        <td className="cursor-pointer" onClick={() => handleToDelete(student?._id)}>
                                            <MdDelete />
                                        </td>
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

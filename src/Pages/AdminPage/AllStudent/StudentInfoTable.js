

import React, { useContext, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { AuthContext } from '../../../context/UserContext';
import { toast } from 'react-hot-toast';


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

    const currentDate = getCurrentDate();
    const currentYear = new Date().getFullYear();
    const { schoolName, currentSchoolCode } = useContext(AuthContext);
    const [currentAttendance, setCurrentAttendance] = useState(
        {
            schoolCode: currentSchoolCode,
            schoolName,
            attendance: []
        })


    const handleToCancel = () => {
        try {
            const confirmed = window.confirm('Are you sure you want to cancel uploading these student attendance statuses?');
            if (confirmed) {
                const presentBtns = document.getElementsByClassName("presentBtn");
                const absentBtns = document.getElementsByClassName("absentBtn");

                // Loop through presentBtns and update their styles
                for (const presentBtn of presentBtns) {
                    presentBtn.classList.remove('bg-green-300');
                    presentBtn.classList.add('bg-yellow-300');
                }

                // Loop through absentBtns and update their styles
                for (const absentBtn of absentBtns) {
                    absentBtn.classList.remove('bg-red-800');
                    absentBtn.classList.add('bg-red-300');
                }

                // Reset the attendance state to an empty array
                setCurrentAttendance({
                    schoolCode: currentSchoolCode,
                    schoolName,
                    attendance: []
                });
            }
        } catch (error) {
            console.error('Failed to cancel upload:', error);
        }
    };

    const handleToUpload = () => {
        try {
            const confirmed = window.confirm('Are you sure you want to upload these student attendance status?');
            if (confirmed) {

                toast.success("Sent the sms to all absence students")

            }
        } catch (error) {
            console.error('Failed to delete student:', error);
        }
    };


    const classNames = classInfoData.map((classInfo) => classInfo.name);

    function getCurrentDate() {
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
        const year = currentDate.getFullYear();

        return `${day}-${month}-${year}`;
    }
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


    const handleTogglePresent = (student) => {

        const presentId = document.getElementById(`p${student?._id}`);
        const absentId = document.getElementById(`a${student?._id}`)
        presentId.classList.remove('bg-yellow-300')
        presentId.classList.add('bg-green-300')
        absentId.classList.remove('bg-red-800')
        absentId.classList.add('bg-red-300')



        setCurrentAttendance((prevAttendance) => {
            // Check if attendance array is empty or not
            if (prevAttendance.attendance.length === 0) {
                return {
                    schoolCode: currentSchoolCode,
                    schoolName,
                    attendance: [{ id: student.studentId, present: true }]
                };
            } else {
                // Map over the previous attendance and update the relevant record

                const updatedAttendance = prevAttendance.attendance.map((record) => {

                    if (record.id === student.studentId) {
                        return record;
                    }
                    else {

                        return record;
                    }
                });

                return {
                    schoolCode: currentSchoolCode,
                    schoolName,
                    attendance: [...updatedAttendance, { id: student.studentId, present: true }]
                    // attendance: updatedAttendance
                };
            }
        });

    };
    const handleToggleAbsent = (student) => {
        const presentId = document.getElementById(`p${student?._id}`);
        const absentId = document.getElementById(`a${student?._id}`);
        presentId.classList.add('bg-yellow-300');
        presentId.classList.remove('bg-green-300');
        absentId.classList.add('bg-red-800');
        absentId.classList.remove('bg-red-300');

        setCurrentAttendance((prevAttendance) => {
            // Check if attendance array is empty or not
            if (prevAttendance.attendance.length === 0) {
                return {
                    schoolCode: currentSchoolCode,
                    schoolName,
                    attendance: [{ id: student.studentId, present: false }]
                };
            } else {
                // Map over the previous attendance and update the relevant record
                const updatedAttendance = prevAttendance.attendance.map((record) => {
                    if (record.id === student.studentId) {
                        return { id: student.studentId, present: false };
                    }
                    else {

                        return record;
                    }
                });

                return {
                    schoolCode: currentSchoolCode,
                    schoolName,
                    attendance: [...updatedAttendance, { id: student.studentId, present: false }]
                    // attendance: updatedAttendance
                };
            }
        });
    };




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
                                                id={`p${student?._id}`}
                                                className="presentBtn px-3 mr-2 py-1 rounded-lg bg-yellow-300"
                                                onClick={() => handleTogglePresent(student)}
                                            >
                                                P
                                            </button>
                                            <button
                                                id={`a${student?._id}`}
                                                className="absentBtn px-3 py-1 rounded-lg bg-red-300"
                                                onClick={() => handleToggleAbsent(student)}
                                            >
                                                A
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

            <div className="ml-auto my-10">
                <button onClick={handleToCancel} className="bg-yellow-400 mr-5 px-5 py-2 font-semibold text-lg rounded">Cancel</button>
                <button onClick={handleToUpload} className="bg-green-400 px-5 py-2 font-semibold text-lg rounded">Upload</button>
            </div>
        </div>
    );
};

export default StudentInfoTable;

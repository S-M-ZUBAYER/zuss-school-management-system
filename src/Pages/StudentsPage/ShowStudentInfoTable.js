import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const ShowStudentInfoTable = ({
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

    const handleToShowDetails = () => {
        toast.success("Student Result and Attendance coming soon it's pending")
    }

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
                                <th>Details</th>
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
                                        <td onClick={handleToShowDetails}><button className="bg-green-400 px-3 py-1 rounded-lg">Details</button></td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default ShowStudentInfoTable;

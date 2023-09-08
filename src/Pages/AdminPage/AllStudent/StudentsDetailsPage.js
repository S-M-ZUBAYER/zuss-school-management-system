import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/UserContext';
import axios from 'axios';
import { useEffect } from 'react';

const StudentsDetailsPage = () => {
    const [activeButton, setActiveButton] = useState('Attendance');
    const [student, setStudent] = useState({});
    const [StudentAttendance, setStudentAttendance] = useState([]);
    const [attendanceList, setAttendanceList] = useState([]);
    const [stdList, setStdList] = useState([]);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const { user, currentSchoolCode } = useContext(AuthContext);

    const currentUrl = window.location.href;
    const parts = currentUrl.split('/');
    const lastPart = parts[parts.length - 1]

    const studentId = lastPart;

    useEffect(() => {
        // Fetch student details
        axios
            .get(`http://localhost:5000/api/students/details/${studentId}?schoolCode=${currentSchoolCode}`)
            .then((response) => {
                setStudent(response.data[0]);

            })
            .catch((error) => {
                console.error(error);
            });

        // Fetch student attendance
        console.log(currentSchoolCode, studentId)
        axios
            .get(`http://localhost:5000/api/stdAttendances/${currentSchoolCode}?studentId=${studentId}`)
            .then((response) => {
                setStudentAttendance(response.data);
                console.log(StudentAttendance);
                setAttendanceList(response.data?.map(atd => atd.attendance));
                setStdList(response.data?.map(atd => atd.attendance)
                    .flatMap(innerArray => innerArray) // Flatten the array of arrays into a single array of objects
                    .filter(object => object.id === studentId))
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    console.log(stdList);

    return (
        <div>
            <div className="max-w-md mx-auto  overflow-hidden md:max-w-2xl">
                <h1 className=" text-lime-800 font-bold text-2xl mt-10">{student.name}</h1>
                <h1 className=" text-lime-200 font-bold text-2xl mb-5">{student.schoolName}</h1>
                <div className="">
                    <div className="md:flex-shrink-0">
                        <div className="class=" text-white pt-12 pb-5>
                            <img className="h-40 w-40 rounded-full border-8 border-x-fuchsia-500 border-yellow-300 mx-auto aos-init aos-animate" src={student.image}
                                alt={`${student.name}'s photo`} ></img>
                        </div>

                    </div>
                    <div className="p-8 flex justify-evenly items-center">
                        <div className="text-white text-start">
                            <p className="text-base">Student ID: {student.studentId}</p>
                            <p className="text-base">Class: {student.className}</p>
                            <p className="text-base">Section: {student.section}</p>
                            <p className="text-base">Shift: {student.shift}</p>
                            <p className="text-base">Class Roll: {student.classRoll}</p>
                            <p className="text-base">Gender: {student.gender}</p>
                            <p className="text-base">Year: {student.year}</p>
                        </div>

                        <div className="text-white text-start">
                            <p className="text-base">Email: {student.email}</p>
                            <p className="text-base">Phone: {student.phone}</p>
                            <p className="text-base">Address: {student.address}</p>
                            <p className="text-base">District: {student.district}</p>
                            <p className="text-base">Division: {student.division}</p>
                            <p className="text-base">Father's Name: {student.fatherName}</p>
                            <p className="text-base">Mother's Name: {student.motherName}</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-10">
                <button
                    className={`${activeButton === 'Attendance'
                        ? 'bg-green-500 text-white'
                        : 'bg-white text-black'
                        } py-2 px-4 rounded-l-lg focus:outline-none`}
                    onClick={() => handleButtonClick('Attendance')}
                >
                    Attendance
                </button>
                <button
                    className={`${activeButton === 'Payment' ? 'bg-green-500 text-white' : 'bg-white text-black'
                        } py-2 px-6  focus:outline-none`}
                    onClick={() => handleButtonClick('Payment')}
                >
                    Payment
                </button>
                <button
                    className={`${activeButton === 'Result' ? 'bg-green-500 text-white' : 'bg-white text-black'
                        } py-2 px-8 rounded-r-lg focus:outline-none`}
                    onClick={() => handleButtonClick('Result')}
                >
                    Result
                </button>
            </div>
            {
                activeButton === 'Attendance' &&


                <div id="tcrAtd" className="text-white">
                    <h2 className="text-xl font-bold text-center my-4">
                        {student?.name} Attendance
                    </h2>
                    <table className="table-auto w-7/12 mx-auto mb-10">
                        <thead>
                            <tr className="bg-emerald-500 border">
                                <th className="py-1">Date</th>
                                <th>Present</th>
                                <th>Absent</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stdList.map((entry) => (
                                <tr
                                    key={entry.date}
                                    className="border"
                                // className={entry.present ? "bg-green-500" : "bg-red-500"}
                                >
                                    <td>{entry.date}</td>
                                    <td>{entry.present ? "✅" : ""}</td>
                                    <td>{!entry.present ? "❌" : ""} </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* <button className="bg-red-300 py-1 px-3 rounded-lg ml-10" id="btnId" onClick={() => generatePDF("tcrAtd")}>Download PDF</button> */}
                </div>

            }
            {
                activeButton === 'Payment' && <div>payment</div>
            }
            {
                activeButton === 'Result' && <div>Result</div>
            }
        </div>
    );
};

export default StudentsDetailsPage;
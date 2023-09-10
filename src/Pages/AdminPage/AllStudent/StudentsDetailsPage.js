import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/UserContext';
import axios from 'axios';
import { useEffect } from 'react';
import StudentOverView from './StudentOverView';
import StudentBtnShow from './StudentBtnShow';
import ShowAttendance from './ShowAttendance';

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
            <StudentOverView
                student={student}
            ></StudentOverView>

            <StudentBtnShow
                handleButtonClick={handleButtonClick}
                activeButton={activeButton}
            ></StudentBtnShow>

            {
                activeButton === 'Attendance' &&

                <ShowAttendance
                    student={student}
                    stdList={stdList}
                ></ShowAttendance>


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
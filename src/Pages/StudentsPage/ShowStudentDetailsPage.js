import React, { useState } from 'react';
import { useContext } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import ShowStudentOverView from './ShowStudentOverView';
import ShowStudentBtnShow from './ShowStudentBtnShow';
import ShowAttendance from '../AdminPage/AllStudent/ShowAttendance';
import { AuthContext } from '../../context/UserContext';
import ShowResultPage from './ShowResultPage';
import DisplaySpinner from '../Shared/Spinners/DisplaySpinner';

const ShowStudentsDetailsPage = () => {
    const [activeButton, setActiveButton] = useState('Attendance');
    const [student, setStudent] = useState({});
    const [StudentAttendance, setStudentAttendance] = useState([]);
    const [attendanceList, setAttendanceList] = useState([]);
    const [stdList, setStdList] = useState([]);
    const [loading, setLoading] = useState(false)

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const { user, currentSchoolCode } = useContext(AuthContext);

    const currentUrl = window.location.href;
    const parts = currentUrl.split('/');
    const lastPart = parts[parts.length - 1]

    const studentId = lastPart;

    console.log(`https://zuss-school-management-system-server-site.vercel.app/api/students/details/${studentId}?schoolCode=${currentSchoolCode}`,)

    useEffect(() => {
        setLoading(true);
        // Fetch student details
        axios
            .get(`https://zuss-school-management-system-server-site.vercel.app/api/students/details/${studentId}?schoolCode=${currentSchoolCode}`)
            .then((response) => {
                setStudent(response.data[0]);

            })
            .catch((error) => {
                console.error(error);

            });

        // Fetch student attendance
        axios
            .get(`https://zuss-school-management-system-server-site.vercel.app/api/stdAttendances/${currentSchoolCode}?studentId=${studentId}`)
            .then((response) => {
                setStudentAttendance(response.data);
                console.log(StudentAttendance);
                setAttendanceList(response.data?.map(atd => atd.attendance));
                setStdList(response.data?.map(atd => atd.attendance)
                    .flatMap(innerArray => innerArray) // Flatten the array of arrays into a single array of objects
                    .filter(object => object.id === studentId))
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, [studentId, currentSchoolCode]);
    console.log(stdList);

    if (loading) {
        return <DisplaySpinner></DisplaySpinner>
    }

    return (
        <div>
            <ShowStudentOverView
                student={student}
            >
            </ShowStudentOverView>

            <ShowStudentBtnShow
                handleButtonClick={handleButtonClick}
                activeButton={activeButton}
            ></ShowStudentBtnShow>

            {
                activeButton === 'Attendance' &&

                <ShowAttendance
                    student={student}
                    stdList={stdList}
                ></ShowAttendance>


            }
            {
                activeButton === 'Result' && <ShowResultPage
                    student={student}
                ></ShowResultPage>
            }
        </div>
    );
};

export default ShowStudentsDetailsPage;
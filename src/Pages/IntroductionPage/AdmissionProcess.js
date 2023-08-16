import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../context/UserContext';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdmissionProcess = () => {
    const [applications, setApplications] = useState([]);
    const [allClasses, setAllClasses] = useState([]);

    const { currentSchoolCode } = useContext(AuthContext);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/application/${currentSchoolCode}`);
                setApplications(response.data);
            } catch (error) {
                console.error('Error fetching applications:', error);
            }
        };

        const fetchClassInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/classes/${currentSchoolCode}`);
                const classInfoData = response.data?.classInfo;
                if (classInfoData) {
                    const classNames = classInfoData.map((element) => element?.name);
                    setAllClasses(classNames);
                }
            } catch (error) {
                console.error('Error fetching classInfo:', error);
            }
        };

        fetchApplications();
        fetchClassInfo();
    }, [currentSchoolCode]);

    console.log(allClasses)

    return (
        <div className="pt-8">
            <h1 className="text-3xl  font-bold text-lime-300 mb-8">Application list 2023</h1>

            <div className="text-white">
                {allClasses.map((className, index) => (
                    <div key={index} className="gradient-text text-2xl mb-20 font-semibold">
                        {className}
                        <table className="border-collapse border mt-2 w-10/12 mx-auto">
                            <thead>
                                <tr>
                                    <th className="border p-2">Application ID</th>
                                    <th className="border p-2">Name</th>
                                    <th className="border p-2">Average Mark</th>
                                    <th className="border p-2">Details</th>
                                </tr>
                            </thead>
                            <tbody className="text-lg">
                                {applications
                                    .filter(application => application.className === className)
                                    .map((application, appIndex) => (
                                        <tr key={appIndex} className="hover:bg-lime-500">
                                            <td className="border p-2">{application.applicationId}</td>
                                            <td className="border p-2">{application.name}</td>
                                            <td className="border p-2">{application.averageMark}</td>
                                            <td className="border p-2">
                                                <Link to={`details/${application.applicationId}`}>
                                                    <button className="bg-blue-500 text-white py-1 px-3 rounded">
                                                        Details
                                                    </button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdmissionProcess;
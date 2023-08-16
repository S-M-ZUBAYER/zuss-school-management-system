import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const ApplicationDetails = () => {
    const [application, setApplication] = useState({});


    const path = window.location.pathname;
    const segments = path.split("/");
    const applicationId = segments[segments.length - 1];

    useEffect(() => {
        const fetchApplicationDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/application/details/${applicationId}`);
                setApplication(response.data);
            } catch (error) {
                console.error('Error fetching application details:', error);
            }
        };

        fetchApplicationDetails();
    }, [applicationId]);

    console.log(application)



    return (

        <div className="flex justify-center items-center min-h-scree">
            <div className="bg-white p-8 shadow-md rounded-md">
                <div className="flex justify-between mb-4">
                    <div>
                        <h2 className="text-2xl font-semibold">{application.name}</h2>
                        <p>{application.designation}</p>
                    </div>
                    <img src="/path/to/your/image.jpg" alt="User" className="w-16 h-16 rounded-full" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold">Personal Information</h3>
                        <p>School: {application.schoolName}</p>
                        <p>Email: {application.email}</p>
                        <p>Phone: {application.phone}</p>
                        {/* ...other personal info */}
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Academic Information</h3>
                        <p>Previous Class: {application.previousClass}</p>
                        <p>Average Mark: {application.averageMark}</p>
                        <p>Class: {application.className}</p>
                        {/* ...other academic info */}
                    </div>

                </div>
                <div className="flex justify-between mx-5 mt-12">
                    <button className="bg-red-300 px-2 py-1">Reject</button>
                    <button className="bg-yellow-300 px-2 py-1">Waiting</button>
                    <button className="bg-green-300 px-2 py-1">Accept</button>
                </div>
            </div>



        </div>
    );
};

export default ApplicationDetails;
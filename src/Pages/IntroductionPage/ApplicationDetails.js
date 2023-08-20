import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const ApplicationDetails = () => {
    const [application, setApplication] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [className, setClassName] = useState('');
    const [section, setSection] = useState('');
    const [shift, setShift] = useState('');

    const handleAcceptClick = () => {
        setShowModal(true);
    };

    const handleModalAccept = () => {
        // Perform your accept logic here
        // You can access className, section, and shift values here

        setShowModal(false);
    };

    const handleModalCancel = () => {
        setShowModal(false);
    };


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

        // <div className="flex justify-center items-center min-h-scree">
        //     <div className="bg-white p-8 shadow-md rounded-md">
        //         <div className="flex justify-between mb-4">
        //             <div>
        //                 <h2 className="text-2xl font-semibold">{application.name}</h2>
        //                 <p>{application.designation}</p>
        //             </div>
        //             <img src="/path/to/your/image.jpg" alt="User" className="w-16 h-16 rounded-full" />
        //         </div>
        //         <div className="grid grid-cols-2 gap-6">
        //             <div>
        //                 <h3 className="text-lg font-semibold">Personal Information</h3>
        //                 <p>School: {application.schoolName}</p>
        //                 <p>Email: {application.email}</p>
        //                 <p>Phone: {application.phone}</p>
        //                 {/* ...other personal info */}
        //             </div>
        //             <div>
        //                 <h3 className="text-lg font-semibold">Academic Information</h3>
        //                 <p>Previous Class: {application.previousClass}</p>
        //                 <p>Average Mark: {application.averageMark}</p>
        //                 <p>Class: {application.className}</p>
        //                 {/* ...other academic info */}
        //             </div>

        //         </div>
        //         <div className="flex justify-between mx-5 mt-12">
        //             <button className="bg-red-300 px-2 py-1">Reject</button>
        //             <button className="bg-yellow-300 px-2 py-1">Waiting</button>
        //             <button className="bg-green-300 px-2 py-1">Accept</button>
        //         </div>
        //     </div>



        // </div>
        <div>


            <div className="flex justify-center p-8 text-white">
                <div className="mr-8">
                    <img src={application?.image} alt="Application Image" className="w-72 h-auto" />
                </div>
                <div className=" mt-auto text-left">
                    <h2 className="text-2xl font-semibold">{application?.name}</h2>
                    <span className="text-gray-200 text-xl">{application?.applicationId}</span>
                </div>
            </div>
            <div>
                {/* Application Info */}
                <div className=" text-white">

                    <div className="grid grid-cols-2 text-left md:mx-32 mb-2">
                        <p><span className="font-semibold">Application Id:</span> {application?.applicationId}</p>
                        <p><span className="font-semibold">Name:</span> {application?.name}</p>
                    </div>

                    <div className="grid grid-cols-2 text-left md:mx-32 mb-2">
                        <p><span className="font-semibold">School:</span> {application?.schoolName}</p>
                        <p><span className="font-semibold">School Code:</span> {application?.schoolCode}</p>
                    </div>
                    <div className="grid grid-cols-2 text-left md:mx-32 mb-2">
                        <p><span className="font-semibold">Phone No:</span> {application?.phone}</p>
                        <p><span className="font-semibold">Email:</span> {application?.email}</p>
                    </div>
                    <div className="grid grid-cols-2 text-left md:mx-32 mb-2">
                        <p><span className="font-semibold">Previous School:</span> {application?.previousSchool}</p>
                        <p><span className="font-semibold">Previous Class:</span> {application?.previousClass}</p>
                    </div>
                    <div className="grid grid-cols-2 text-left md:mx-32 mb-2">
                        <p><span className="font-semibold">Average Mark:</span> {application?.averageMark}</p>
                        <p><span className="font-semibold">Class Name:</span> {application?.className}</p>
                    </div>
                    <div className="grid grid-cols-2 text-left md:mx-32 mb-2">
                        <p><span className="font-semibold">Father Name:</span> {application?.fatherName}</p>
                        <p><span className="font-semibold">Mother Name:</span> {application?.motherName}</p>
                    </div>
                    <div className="grid grid-cols-2 text-left md:mx-32 mb-2">
                        <p><span className="font-semibold">Extra Information:</span> {application?.extraInfo}</p>
                        <p><span className="font-semibold">Address:</span> {application?.address}</p>
                    </div>
                    <div className="grid grid-cols-2 text-left md:mx-32 mb-2">
                        <p><span className="font-semibold">Gender:</span> {application?.gender}</p>
                        <p><span className="font-semibold">District:</span> {application?.district}</p>
                    </div>
                    <div className="grid grid-cols-2 text-left md:mx-32 mb-2">
                        <p><span className="font-semibold">Division:</span> {application?.division}</p>
                    </div>
                    {
                        application?.number && <>
                            <div className="grid grid-cols-2 text-left md:mx-32 mb-2">
                                <p><span className="font-semibold">Agent Number:</span> {application?.number}</p>
                                <p><span className="font-semibold">Agent Name:</span> {application?.agentName}</p>
                            </div>
                            <div className="grid grid-cols-2 text-left md:mx-32 mb-2">
                                <p><span className="font-semibold">Transaction Id:</span> {application?.transactionId}</p>
                                <p><span className="font-semibold">Amount:</span> {application?.amount}</p>
                            </div>
                        </>
                    }

                </div>

                {/* Action Buttons */}
                <div className="flex justify-center mt-8">
                    <button className="px-4 py-2 mr-2 bg-red-500 text-white rounded">Reject</button>
                    <button className="px-4 py-2 mr-2 bg-yellow-500 text-white rounded">Waiting</button>
                    <button onClick={handleAcceptClick} className="px-4 py-2 bg-green-500 text-white rounded">Accept</button>
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-lg font-semibold mb-4">Accept Application</h2>
                        <input
                            type="text"
                            placeholder="Class Name"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                            className="w-full mb-2 px-2 py-1 border rounded"
                        />
                        <input
                            type="text"
                            placeholder="Section"
                            value={section}
                            onChange={(e) => setSection(e.target.value)}
                            className="w-full mb-2 px-2 py-1 border rounded"
                        />
                        <input
                            type="text"
                            placeholder="Shift"
                            value={shift}
                            onChange={(e) => setShift(e.target.value)}
                            className="w-full mb-2 px-2 py-1 border rounded"
                        />
                        <div className="flex justify-end">
                            <button className="px-3 py-1 mr-2 bg-green-500 text-white rounded" onClick={handleModalAccept}>Accept</button>
                            <button className="px-3 py-1 bg-red-500 text-white rounded" onClick={handleModalCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default ApplicationDetails;
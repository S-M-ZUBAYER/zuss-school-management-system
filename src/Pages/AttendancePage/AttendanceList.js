import React, { useState } from 'react';

const StudentAttendance = () => {
    const [schoolName, setSchoolName] = useState('');
    const [schoolCode, setSchoolCode] = useState('');
    const [filteredStudents, setFilteredStudents] = useState([]);

    const stdList = [
        {
            name: "John Doe",
            class: "10A",
            rollNo: "123",
            SchoolName: "Kamalapur schoo",
            Code: ":2222",
            email: "johndoe@example.com",
            phone: "555-555-5555",
            image: "https://ibb.co/Wnx2kNz",
            attendance: [
                { date: "2023-05-01", isPresent: false, isEmergency: false },
                { date: "2023-05-02", isPresent: false, isEmergency: false },
                { date: "2023-05-03", isPresent: false, isEmergency: false },
            ]
        },
        {
            name: "John Doe",
            class: "10A",
            rollNo: "1234",
            SchoolName: "Kamalapur schoo",
            Code: ":2222",
            email: "johndoe@example.com",
            phone: "555-555-5555",
            image: "https://ibb.co/Wnx2kNz",
            attendance: [
                { date: "2023-05-01", isPresent: false, isEmergency: false },
                { date: "2023-05-02", isPresent: false, isEmergency: false },
                { date: "2023-05-03", isPresent: false, isEmergency: false },
            ]
        },
        {
            name: "John Doe",
            class: "10A",
            rollNo: "1234",
            SchoolName: "Kamalapur schoo",
            Code: ":2222",
            email: "johndoe@example.com",
            phone: "555-555-5555",
            image: "https://ibb.co/Wnx2kNz",
            attendance: [
                { date: "2023-05-01", isPresent: false, isEmergency: false },
                { date: "2023-05-02", isPresent: false, isEmergency: false },
                { date: "2023-05-03", isPresent: false, isEmergency: false },
            ]
        },

        // Add more student objects here
    ];

    const filterStudents = () => {
        const filtered = stdList.filter(student => student.SchoolName === schoolName && student.Code === schoolCode);
        setFilteredStudents(filtered);
        console.log(filteredStudents)
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Student Attendance</h1>
            <div className="flex mb-4">
                <input
                    type="text"
                    className="mr-2 p-2 border border-gray-300 rounded"
                    placeholder="Enter School Name"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                />
                <input
                    type="text"
                    className="mr-2 p-2 border border-gray-300 rounded"
                    placeholder="Enter School Code"
                    value={schoolCode}
                    onChange={(e) => setSchoolCode(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={filterStudents}
                >
                    Filter
                </button>
            </div>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Class</th>
                        <th className="px-4 py-2">Roll No</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Phone</th>
                        <th className="px-4 py-2">Attendance</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map((student, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2">{student.name}</td>
                            <td className="px-4 py-2">{student.class}</td>
                            <td className="px-4 py-2">{student.rollNo}</td>
                            <td className="px-4 py-2">{student.email}</td>
                            <td className="px-4 py-2">{student.phone}</td>
                            <td className="px-4 py-2">
                                {/* Render attendance buttons for each date */}
                                {student.attendance.map((attendance, idx) => (
                                    <div key={idx}>
                                        <button
                                            className={`mr-2 ${attendance.isPresent ? 'bg-green-500' : 'bg-red-500'} text-white px-2 py-1 rounded`}
                                            onClick={() => {
                                                // Handle button click and update attendance
                                            }}
                                        >
                                            {attendance.date}
                                        </button>
                                    </div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentAttendance;

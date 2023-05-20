import React, { useState } from "react";

const StdInformation = () => {
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [attendanceModalOpen, setAttendanceModalOpen] = useState(false);
    const [paymentModalOpen, setPaymentModalOpen] = useState(false);

    const studentList = [
        {
            name: "John Doe",
            class: "10th",
            rollNo: "A001",
            email: "john.doe@example.com",
            attendance: [
                { date: "2023-01-01", status: "present" },
                { date: "2023-01-02", status: "absent" },
                // ...
            ],
            paymentStatus: [
                { month: "January 2023", status: "paid" },
                { month: "February 2023", status: "unpaid" },
                // ...
            ],
        },
        {
            name: "Jane Smith",
            class: "9th",
            rollNo: "B002",
            email: "jane.smith@example.com",
            attendance: [
                { date: "2023-01-01", status: "present" },
                { date: "2023-01-02", status: "present" },
                // ...
            ],
            paymentStatus: [
                { month: "January 2023", status: "paid" },
                { month: "February 2023", status: "paid" },
                // ...
            ],
        },
        // ...
    ];


    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredStudents = studentList.filter((student) =>
        student.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const handleAttendanceClick = (student) => {
        setSelectedStudent(student);
        setAttendanceModalOpen(true);
    };

    const handlePaymentClick = (student) => {
        setSelectedStudent(student);
        setPaymentModalOpen(true);
    };

    return (
        <div className="text-white mx-5">
            <h2 className="text-3xl font-bold text-green-300 my-10">Student List</h2>

            <div className="flex items-center mb-4">
                <label htmlFor="search" className="mr-2">
                    Search by Roll No:
                </label>
                <input
                    type="text"
                    id="search"
                    placeholder="Enter Roll No"
                    className="border rounded-md p-2 text-black"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            {filteredStudents.map((student) => (
                <div key={student.email} className="border rounded-md p-4 mb-4">
                    <h3 className="text-lg font-bold mb-2">{student.name}</h3>
                    <p>Email: {student.email}</p>
                    <p>Roll No: {student.rollNo}</p>
                    <p>Class: {student.class}</p>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
                        onClick={() => handleAttendanceClick(student)}
                    >
                        Attendance
                    </button>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 ml-2"
                        onClick={() => handlePaymentClick(student)}
                    >
                        Payment Status
                    </button>
                </div>
            ))}



            {studentList.map((student) => (
                <div key={student.email} className="border rounded-md p-4 mb-4">
                    <h3 className="text-lg font-bold mb-2">{student.name}</h3>
                    <p>Email: {student.email}</p>
                    <p>Roll No: {student.rollNo}</p>
                    <p>Class: {student.class}</p>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
                        onClick={() => handleAttendanceClick(student)}
                    >
                        Attendance
                    </button>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 ml-2"
                        onClick={() => handlePaymentClick(student)}
                    >
                        Payment Status
                    </button>
                </div>
            ))}

            {attendanceModalOpen && selectedStudent && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white w-2/6 text-black rounded-lg p-4">
                        <h3 className="text-lg font-bold mb-2">Attendance</h3>
                        {selectedStudent.attendance.map((entry) => (
                            <div key={entry.date} className="flex items-center justify-around mb-2">
                                <p className="mr-2">{entry.date}</p>
                                {entry.status === "present" ? (
                                    <span className="text-green-500">&#10004;</span>
                                ) : (
                                    <span className="text-red-500">&#10006;</span>
                                )}
                            </div>
                        ))}
                        <button
                            className="bg-gray-500 text-white px-4 py-2 rounded-md mt-2"
                            onClick={() => setAttendanceModalOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {paymentModalOpen && selectedStudent && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white w-2/6 text-black rounded-lg p-4">
                        <h3 className="text-lg font-bold mb-2">Payment Status</h3>
                        {selectedStudent.paymentStatus.map((entry) => (
                            <div key={entry.month} className="flex items-center justify-around mb-2">
                                <p className="mr-2">{entry.month}</p>
                                {entry.status === "paid" ? (
                                    <span className="bg-green-500 text-white px-4 py-2 rounded-md">
                                        Paid
                                    </span>
                                ) : (
                                    <span className="bg-red-500 text-white px-4 py-2 rounded-md">
                                        Unpaid
                                    </span>
                                )}
                            </div>
                        ))}
                        <button
                            className="bg-gray-500 text-white px-4 py-2 rounded-md mt-2"
                            onClick={() => setPaymentModalOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StdInformation;


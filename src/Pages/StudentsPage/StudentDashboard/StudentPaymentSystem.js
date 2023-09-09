// import React, { useState } from 'react';
// import { useContext } from 'react';
// import { AuthContext } from '../../../context/UserContext';

// const paymentsData = [
//     { name: 'January Fees', section: "science", Roll: "12", StudentId: "3785995353", className: "class 10", amount: 500, paid: true },
//     { name: 'February Fees', section: "arts", Roll: "12", StudentId: "3785995353", className: "class 10", amount: 600, paid: false },
//     { name: 'Others Fees', section: "science", Roll: "12", StudentId: "3785995353", className: "class 10", amount: 400, paid: true },
//     { name: 'Sports Fees', section: "arts", Roll: "12", StudentId: "3785995353", className: "class 10", amount: 300, paid: false },
//     { name: 'picnic Fees', section: "arts", Roll: "12", StudentId: "3785995353", className: "class 10", amount: 500, paid: false },
//     { name: 'Lab Fees', section: "arts", Roll: "12", StudentId: "3785995353", className: "class 10", amount: 50, paid: false },
//     { name: 'Tour Fees', section: "arts", Roll: "12", StudentId: "3785995353", className: "class 10", amount: 900, paid: false },
//     // Add more payment data as needed
// ];

// function StudentPaymentSystem() {
//     const { schoolName, className, setClassName, purpose, setPurpose, amount, setAmount, payments, setPayments } = useContext(AuthContext);
//     console.log({ schoolName, className, setClassName, purpose, setPurpose, amount, setAmount, payments, setPayments })
//     const [selectedPayments, setSelectedPayments] = useState([]);

//     const handlePaymentSelect = (payment) => {
//         if (selectedPayments.includes(payment)) {
//             setSelectedPayments(selectedPayments.filter((p) => p !== payment));
//         } else {
//             setSelectedPayments([...selectedPayments, payment]);
//         }
//     };
//     console.log(selectedPayments)
//     const handlePayment = () => {
//         // Perform payment logic here
//         // Mark selected payments as paid

//         setSelectedPayments([]);
//     };

//     const calculateTotalSelectedAmount = () => {
//         let totalAmount = 0;
//         for (const payment of selectedPayments) {
//             const selectedPayment = paymentsData.find((data) => data.name === payment);
//             if (selectedPayment) {
//                 totalAmount += selectedPayment.amount;
//             }
//         }
//         return totalAmount;
//     };

//     const calculateUnpaidAmount = () => {
//         let unpaidAmount = 0;
//         for (const payment of paymentsData) {
//             if (!selectedPayments.includes(payment.name)) {
//                 unpaidAmount += payment.amount;
//             }
//         }
//         return unpaidAmount;
//     };

//     return (
//         <div className="text-white ">
//             <h2 className="text-3xl font-semibold text-green-400 mt-5 mb-12">Payment System</h2>

//             <div className="w-full">

//                 <ul >
//                     {paymentsData.map((payment) => (
//                         <li key={payment.name}>
//                             <label >
//                                 <input
//                                     type={payment?.paid ? 'hidden' : "checkbox"}
//                                     checked={selectedPayments.includes(payment.name)}
//                                     onChange={() => handlePaymentSelect(payment.name)}
//                                 />
//                                 {payment.name} - {payment.amount}
//                                 {payment?.paid ? '' : <button>Unpaid</button>}

//                             </label>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {selectedPayments.length > 0 && (
//                 <div>
//                     <h3>Selected Payments</h3>
//                     <ul>
//                         {selectedPayments.map((payment) => (
//                             <li key={payment}>{payment}</li>
//                         ))}
//                     </ul>
//                     <p>Total Amount: {calculateTotalSelectedAmount()}</p>
//                     <p>Unpaid Amount: {calculateUnpaidAmount()}</p>
//                     <button onClick={handlePayment}>Pay Now</button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default StudentPaymentSystem;



import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/UserContext';
import axios from 'axios';



const paymentsData = {
    name: "S M Zubayer", ClassRoll: "12", ClassName: "Class 12", Section: "Science",
    Fees: [{ name: 'January Fees', section: "science", Roll: "12", StudentId: "3785995353", className: "class 10", amount: 500, paid: true },
    { name: 'February Fees', section: "arts", Roll: "12", StudentId: "3785995353", className: "class 10", amount: 600, paid: false },
    { name: 'Others Fees', section: "science", Roll: "12", StudentId: "3785995353", className: "class 10", amount: 400, paid: true },
    { name: 'Sports Fees', section: "arts", Roll: "12", StudentId: "3785995353", className: "class 10", amount: 300, paid: false },
    { name: 'picnic Fees', section: "arts", Roll: "12", StudentId: "3785995353", className: "class 10", amount: 500, paid: false },
    { name: 'Lab Fees', section: "arts", Roll: "12", StudentId: "3785995353", className: "class 10", amount: 50, paid: false },
    { name: 'Tour Fees', section: "arts", Roll: "12", StudentId: "3785995353", className: "class 10", amount: 900, paid: false }]
    // Add more payment data as needed]
};



function StudentPaymentSystem() {
    const { schoolName, className, setClassName, purpose, setPurpose, amount, setAmount, payments, setPayments, currentSchoolCode, user } = useContext(AuthContext);
    console.log({ schoolName, className, setClassName, purpose, setPurpose, amount, setAmount, payments, setPayments })
    const [selectedPayments, setSelectedPayments] = useState([]);
    const [allPayment, setAllPayment] = useState([]);
    const [stdPayment, setStdPayment] = useState({});
    const [student, setStudent] = useState({});
    console.log(allPayment)
    console.log(student, "student")
    const handlePaymentSelect = (payment) => {
        if (selectedPayments.includes(payment)) {
            setSelectedPayments(selectedPayments.filter((p) => p !== payment));
        } else {
            setSelectedPayments([...selectedPayments, payment]);
        }
    };

    console.log(selectedPayments);

    const handlePayment = () => {
        // Perform payment logic here
        // Mark selected payments as paid

        setSelectedPayments([]);
    };

    // useEffect(() => {
    //     // Fetch student details


    //     // Fetch student attendance
    //     console.log(currentSchoolCode, studentId)
    //     axios
    //         .get(`https://zuss-school-management-system-server-site.vercel.app/api/stdAttendances/${currentSchoolCode}?studentId=${studentId}`)
    //         .then((response) => {
    //             setStudentAttendance(response.data);
    //             console.log(StudentAttendance);
    //             setAttendanceList(response.data?.map(atd => atd.attendance));
    //             setStdList(response.data?.map(atd => atd.attendance)
    //                 .flatMap(innerArray => innerArray) // Flatten the array of arrays into a single array of objects
    //                 .filter(object => object.id === studentId))
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, []);

    useEffect(() => {
        const fetchPayment = async () => {
            try {
                const response = await axios.get(`https://zuss-school-management-system-server-site.vercel.app/api/stdPayment/${currentSchoolCode}?year=${new Date().getFullYear()}`);
                console.log(response.data);
                setAllPayment(response.data)


            } catch (error) {
                console.error('Error fetching payment information:', error);
            }
        };

        const fetchStudents = async () => {
            try {
                // Construct the URL with the schoolCode and optional query parameters
                const url = `https://zuss-school-management-system-server-site.vercel.app/api/students/students/student/${currentSchoolCode}?${user?.email ? `email=${user?.email}&` : ''}${new Date().getFullYear() ? `year=${new Date().getFullYear()}` : ''}`;

                // Make the GET request
                const response = await axios.get(url);

                // Set the fetched students in the state
                setStudent(response.data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };


        fetchPayment();
    }, [])

    const calculateTotalSelectedAmount = () => {
        let totalAmount = 0;

        for (const payment of selectedPayments) {
            const selectedPayment = (paymentsData.Fees).find((data) => data.name === payment);
            if (selectedPayment) {
                totalAmount += selectedPayment.amount;
            }
        }
        return totalAmount;
    };

    const calculateUnpaidAmount = () => {
        let unpaidAmount = 0;

        for (const payment of (paymentsData.Fees)) {
            if (payment.paid === false) {
                if (!selectedPayments.includes(payment.name)) {
                    unpaidAmount += payment.amount;
                }
            }

        }
        return unpaidAmount;
    };

    return (
        <div className="text-white ">
            <h2 className="text-3xl font-semibold text-green-400 mt-5 mb-12">Payment System</h2>
            <div className="flex justify-around text-lg font-semibold mb-8">
                <p>Name: {paymentsData?.name}</p>
                <p>Class Name: {paymentsData?.ClassName}</p>
                <p>Section: {paymentsData?.Section}</p>
                <p>Class Roll: {paymentsData?.ClassRoll}</p>
            </div>
            <div className="w-11/12 mx-auto">
                <table className="w-full border-collapse border">
                    <thead>
                        <tr>
                            <th className="border p-2"></th>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Amount</th>
                            <th className="border p-2">Paid/Unpaid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(paymentsData.Fees).map((payment) => (
                            <tr key={payment.name} className={payment.paid ? 'bg-green-500' : 'bg-yellow-500'}>
                                <td className="border p-2">
                                    <input
                                        type={payment.paid ? 'hidden' : 'checkbox'}
                                        checked={selectedPayments.includes(payment.name)}
                                        onChange={() => handlePaymentSelect(payment.name)}
                                        className="w-6 h-6 rounded-lg"
                                    />
                                </td>
                                <td className="border p-2">{payment.name}</td>
                                <td className="border p-2">{payment.amount}</td>
                                <td className="border p-2">
                                    {payment.paid ? 'Paid' : <button onClick={() => handlePaymentSelect(payment.name)}>Unpaid</button>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedPayments.length > 0 && (
                <div className="flex mt-12 ml-14 pb-8 text-lg font-semibold items-center">
                    <p className="mr-5">Selected Amount: <span className="text-green-400">{calculateTotalSelectedAmount()}</span></p>
                    <p>Unpaid Amount: <span className="text-yellow-400">{calculateUnpaidAmount()}</span></p>
                    <button className="bg-green-400 px-2 py-1 ml-5 rounded-lg" onClick={handlePayment}>Pay Now</button>
                </div>
            )}
        </div>
    );
}

export default StudentPaymentSystem;

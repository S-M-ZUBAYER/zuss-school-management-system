import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/UserContext';
import axios from 'axios';

function StudentPaymentSystem() {
    const { currentSchoolCode, user } = useContext(AuthContext);
    const [selectedPayments, setSelectedPayments] = useState([]);
    const [student, setStudent] = useState({});
    const [stdPayment, setStdPayment] = useState(null); // Initialize to null instead of {}
    const [allPayment, setAllPayment] = useState([]); // Initialize as an empty array

    const handlePaymentSelect = (payment) => {
        if (selectedPayments.includes(payment)) {
            setSelectedPayments((prevSelected) => prevSelected.filter((p) => p !== payment));
        } else {
            setSelectedPayments((prevSelected) => [...prevSelected, payment]);
        }
    };

    const handlePayment = () => {
        const selectedPaidPayments = stdPayment.allFees.map((payment) => ({
            ...payment,
            paid: selectedPayments.includes(payment.purpose),
        }));

        const selectedUnpaidPayments = stdPayment.allFees.map((payment) => ({
            ...payment,
            paid: !selectedPayments.includes(payment.purpose),
        }));

        console.log('Selected Paid Payments:', selectedPaidPayments);
        console.log('Selected Unpaid Payments:', selectedUnpaidPayments);
    };

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const url = `http://localhost:5000/api/students/student/${currentSchoolCode}?email=mukul@gmail.com&year=${new Date().getFullYear()}`;
                const response = await axios.get(url);
                if (response.data.length > 0) {
                    setStudent(response.data[0]);
                }
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();

    }, [currentSchoolCode, user?.email]); // Removed 'allPayment' from the dependency array

    useEffect(() => {
        const fetchPayment = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/stdPayment/${currentSchoolCode}?year=${new Date().getFullYear()}`);
                setAllPayment(response.data);
            } catch (error) {
                console.error('Error fetching payment information:', error);
            }
        };

        fetchPayment();

    }, [currentSchoolCode, user?.email]); // Removed 'allPayment' from the dependency array

    useEffect(() => {
        // Use a separate effect for setting 'stdPayment' based on 'student' and 'allPayment'
        let filteredPayment = allPayment;

        if (student.shift) {
            filteredPayment = allPayment.filter(pay => pay.shiftName === student.shift && pay.className === student?.className);
        } else if (student?.section) {
            filteredPayment = allPayment.filter(pay => pay.sectionName === student.section && pay.className === student?.className);
        } else {
            filteredPayment = allPayment.filter(pay => pay.className === student?.className);
        }

        setStdPayment(filteredPayment.length > 0 ? filteredPayment[0] : null); // Set to null if no data found

    }, [student, allPayment]);

    const calculateTotalSelectedAmount = () => {
        let totalAmount = "0"; // Initialize as a string

        for (const payment of selectedPayments) {
            const selectedPayment = (stdPayment.allFees).find((data) => data.purpose === payment);
            if (selectedPayment) {
                totalAmount = (Number(totalAmount) + Number(selectedPayment.amount)).toString(); // Convert to numbers and back to a string
            }
        }
        return totalAmount;
    };

    const calculateUnpaidAmount = () => {
        let unpaidAmount = "0"; // Initialize as a string

        for (const payment of stdPayment.allFees) {
            if (!payment.paid && !selectedPayments.includes(payment.purpose)) {
                unpaidAmount = (Number(unpaidAmount) + Number(payment.amount)).toString(); // Convert to numbers and back to a string
            }
        }
        return unpaidAmount;
    };


    return (
        <div className="text-white ">
            <h2 className="text-3xl font-semibold text-green-400 mt-5 mb-12">Payment System</h2>
            <div className="flex justify-around text-lg font-semibold mb-8">
                <p>Name: {student?.name}</p>
                <p>Class Name: {student?.className}</p>
                <p>Section: {student?.section ? student?.section : ""}</p>
                <p>Shift: {student?.shift ? student?.shift : ""}</p>
                <p>Class Roll: {student?.classRoll}</p>
            </div>

            {stdPayment && (
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
                            {(stdPayment?.allFees).map((payment) => (
                                <tr key={payment.purpose} className={payment.paid ? 'bg-green-500' : 'bg-yellow-500'}>
                                    <td className="border p-2">
                                        <input
                                            type={payment.paid ? 'hidden' : 'checkbox'}
                                            checked={selectedPayments.includes(payment.purpose)}
                                            onChange={() => handlePaymentSelect(payment.purpose)}
                                            className="w-6 h-6 rounded-lg"
                                        />
                                    </td>
                                    <td className="border p-2">{payment.purpose}</td>
                                    <td className="border p-2">{payment.amount}</td>
                                    <td className="border p-2">
                                        {payment.paid ? 'Paid' : <button onClick={() => handlePaymentSelect(payment.purpose)}>Unpaid</button>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

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

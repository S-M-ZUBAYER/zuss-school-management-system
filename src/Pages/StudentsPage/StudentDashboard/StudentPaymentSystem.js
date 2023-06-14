import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/UserContext';

const paymentsData = [
    { name: 'January Fee', amount: 500, paid: true },
    { name: 'February Fee', amount: 600, paid: false },
    { name: 'Others Fee', amount: 400, paid: true },
    { name: 'Sports Fee', amount: 300, paid: false },
    // Add more payment data as needed
];

function StudentPaymentSystem() {
    const { schoolName, className, setClassName, purpose, setPurpose, amount, setAmount, payments, setPayments } = useContext(AuthContext);
    console.log({ schoolName, className, setClassName, purpose, setPurpose, amount, setAmount, payments, setPayments })
    const [selectedPayments, setSelectedPayments] = useState([]);

    const handlePaymentSelect = (payment) => {
        if (selectedPayments.includes(payment)) {
            setSelectedPayments(selectedPayments.filter((p) => p !== payment));
        } else {
            setSelectedPayments([...selectedPayments, payment]);
        }
    };
    console.log(selectedPayments)
    const handlePayment = () => {
        // Perform payment logic here
        // Mark selected payments as paid

        setSelectedPayments([]);
    };

    const calculateTotalSelectedAmount = () => {
        let totalAmount = 0;
        for (const payment of selectedPayments) {
            const selectedPayment = paymentsData.find((data) => data.name === payment);
            if (selectedPayment) {
                totalAmount += selectedPayment.amount;
            }
        }
        return totalAmount;
    };

    const calculateUnpaidAmount = () => {
        let unpaidAmount = 0;
        for (const payment of paymentsData) {
            if (!selectedPayments.includes(payment.name)) {
                unpaidAmount += payment.amount;
            }
        }
        return unpaidAmount;
    };

    return (
        <div className="text-white ">
            <h2>Payment System</h2>

            <div className="w-full">
                <h3>All Payments</h3>
                <ul >
                    {paymentsData.map((payment) => (
                        <li key={payment.name}>
                            <label >
                                <input
                                    type={payment?.paid ? 'hidden' : "checkbox"}
                                    checked={selectedPayments.includes(payment.name)}
                                    onChange={() => handlePaymentSelect(payment.name)}
                                />
                                {payment.name} - {payment.amount}
                                {payment?.paid ? '' : <button>Unpaid</button>}

                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            {selectedPayments.length > 0 && (
                <div>
                    <h3>Selected Payments</h3>
                    <ul>
                        {selectedPayments.map((payment) => (
                            <li key={payment}>{payment}</li>
                        ))}
                    </ul>
                    <p>Total Amount: {calculateTotalSelectedAmount()}</p>
                    <p>Unpaid Amount: {calculateUnpaidAmount()}</p>
                    <button onClick={handlePayment}>Pay Now</button>
                </div>
            )}
        </div>
    );
}

export default StudentPaymentSystem;

import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/UserContext';


function PaymentCollection() {
    const { schoolName, className, setClassName, purpose, setPurpose, amount, setAmount, payments, setPayments } = useContext(AuthContext);
    // console.log(schoolName, className, setClassName, purpose, setPurpose, amount, setAmount)
    // const [className, setClassName] = useState('Class1');
    // const [purpose, setPurpose] = useState('');
    // const [amount, setAmount] = useState('');
    // const [payments, setPayments] = useState({
    //     Class1: [],
    //     Class2: [],
    //     Class3: [],
    //     Class4: [],
    //     Class5: [],
    //     Class6: [],
    //     Class7: [],
    //     Class8: [],
    //     Class9: [],
    //     Class10: [],
    //     Class11: [],
    //     Class12: [],
    // });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'className') {
            setClassName(value);
        } else if (name === 'purpose') {
            setPurpose(value);
        } else if (name === 'amount') {
            setAmount(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payment = { purpose, amount };
        setPayments((prevPayments) => {
            return { ...prevPayments, [className]: [...prevPayments[className], payment] };
        });
        setPurpose('');
        setAmount('');
        console.log(payments)
    };

    const getTotal = (payments) => {
        return payments.reduce((total, payment) => total + parseFloat(payment.amount), 0);
    };

    return (
        <div className="text-white">
            <h1>Payment Calculator</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Class Name:
                    <select name="className" className="text-black" value={className} onChange={handleInputChange}>
                        <option value="Class1">Class 1</option>
                        <option value="Class2">Class 2</option>
                        <option value="Class3">Class 3</option>
                        <option value="Class4">Class 4</option>
                        <option value="Class5">Class 5</option>
                        <option value="Class6">Class 6</option>
                        <option value="Class7">Class 7</option>
                        <option value="Class8">Class 8</option>
                        <option value="Class9">Class 9</option>
                        <option value="Class10">Class 10</option>
                        <option value="Class11">Class 11</option>
                        <option value="Class12">Class 12</option>
                    </select>
                </label>
                <label>
                    Purpose:
                    <input type="text" className="text-black" name="purpose" value={purpose} onChange={handleInputChange} />
                </label>
                <label>
                    Amount:
                    <input type="number" className="text-black" name="amount" value={amount} onChange={handleInputChange} />
                </label>
                <button type="submit">Add Payment</button>
            </form>
            <h2>Class Payment History</h2>
            <ul>
                {Object.entries(payments).map(([className, payments]) => (
                    <li key={className}>
                        <h3>{className}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Purpose</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payments.map((payment, index) => (
                                    <tr key={index}>
                                        <td>{payment.purpose}</td>
                                        <td>{payment.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Total:</td>
                                    <td>{getTotal(payments)}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PaymentCollection;

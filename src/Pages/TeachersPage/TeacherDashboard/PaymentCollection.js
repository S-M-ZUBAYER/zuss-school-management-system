import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/UserContext';
import { toast } from 'react-hot-toast';
import { green } from '@cloudinary/url-gen/actions/adjust';


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

    const monthOptions = [
        { value: 'January', label: 'January' },
        { value: 'February', label: 'February' },
        { value: 'March', label: 'March' },
        { value: 'April', label: 'April' },
        { value: 'May', label: 'May' },
        { value: 'June', label: 'June' },
        { value: 'July', label: 'July' },
        { value: 'August', label: 'August' },
        { value: 'September', label: 'September' },
        { value: 'October', label: 'October' },
        { value: 'November', label: 'November' },
        { value: 'December', label: 'December' },
    ];

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
        if (amount === "") {
            toast.error("please input the amount")
            return;
        }
        const payment = { purpose, amount, status: false };
        setPayments((prevPayments) => {
            return { ...prevPayments, [className]: [...prevPayments[className], payment] };
        });
        setPurpose('');
        setAmount('');
    };

    const getTotal = (payments) => {
        return payments.reduce((total, payment) => total + parseFloat(payment.amount), 0);
    };
    // const getUnpaid = (payments) => {
    //     const unpaidFees = payments.filter((element) => element.status !== "true")
    //     const unPaid = unpaidFees.reduce((total, payment) => total + parseFloat(payment.amount), 0);
    //     return unPaid;
    // };

    const handleToPay = (payment, e) => {
        payment.status = "true"
        e.target.innerText = "Paid"
        // const unpaidAmount = document.getElementById("unpaidElement");
        // const restAmount = unpaidAmount.innerText - payment?.amount;
        // unpaidAmount.innerText = restAmount;
    }


    return (
        <div className="text-white">
            <h1 className="text-orange-300 text-3xl font-bold my-5">Payment System</h1>
            <form className=" mb-20" onSubmit={handleSubmit}>
                <div className='my-2'>
                    <label className="text-lg">
                        Class Name:
                        <select name="className" className="text-black ml-2 pl-1" value={className} onChange={handleInputChange}>
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
                </div>
                <div className='my-2'>
                    <label className="text-lg">
                        Purpose:
                        <input type="text" className="text-black ml-2 pl-1" name="purpose" value={purpose} onChange={handleInputChange} />
                    </label>
                </div>
                <div className='my-2'>
                    <label className="text-lg">
                        Amount:
                        <input type="number" className="text-black ml-2 pl-1 required:" name="amount" value={amount} onChange={handleInputChange} />
                    </label>
                </div>
                <button type="submit" className="bg-lime-200 py-1 px-5 text-black rounded-md mt-5 text-lg font-semibold">Add Payment</button>
            </form>
            <h2 className='text-orange-300 text-3xl font-bold my-5'>Class Payment Data</h2>
            <ul className=" lg:mx-20">
                {Object.entries(payments).map(([className, payments]) => (
                    <li key={className}>
                        <h3 className=" text-lime-500 text-xl font-semibold mt-5" >{className}</h3>
                        <table className="w-full my-5">
                            <thead>
                                <tr className="bg-lime-500">
                                    <th>Purpose</th>
                                    <th>Amount</th>
                                    <th>status</th>

                                </tr>
                            </thead>
                            <tbody>
                                {payments.map((payment, index) => (
                                    <tr key={index}>
                                        <td className="text-start md:pl-5">{payment.purpose}</td>
                                        <td>{payment.amount}</td>
                                        <td>
                                            {
                                                payment.status ? <button className=" bg-green-300 text-black px-3 py-1">Paid</button> : <button className=" text-black ml-2 pl-1 bg-blue-300" onClick={(e) => handleToPay(payment, e)}>pay</button>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className='bg-gray-800 font-semibold w-full'>
                                    <td className="text-start">Total:</td>
                                    <td>{getTotal(payments)}</td>
                                    <td></td>
                                </tr>
                                {/* <tr>
                                    <td>Unpaid:</td>
                                    <td id='unpaidElement' >{getUnpaid(payments)}</td>
                                </tr> */}
                            </tfoot>
                        </table>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PaymentCollection;



// import React, { useState } from 'react';

// const classOptions = [
//     { value: 'Class-1', label: 'Class 1' },
//     { value: 'Class-2', label: 'Class 2' },
//     { value: 'Class-3', label: 'Class 3' },
//     { value: 'Class-4', label: 'Class 4' },
//     { value: 'Class-5', label: 'Class 5' },
//     { value: 'Class-6', label: 'Class 6' },
//     { value: 'Class-7', label: 'Class 7' },
//     { value: 'Class-8', label: 'Class 8' },
//     { value: 'Class-9', label: 'Class 9' },
//     { value: 'Class-10', label: 'Class 10' },
//     { value: 'Class-11', label: 'Class 11' },
//     { value: 'Class-12', label: 'Class 12' },
// ];

// const monthOptions = [
//     { value: 'January', label: 'January' },
//     { value: 'February', label: 'February' },
//     { value: 'March', label: 'March' },
//     { value: 'April', label: 'April' },
//     { value: 'May', label: 'May' },
//     { value: 'June', label: 'June' },
//     { value: 'July', label: 'July' },
//     { value: 'August', label: 'August' },
//     { value: 'September', label: 'September' },
//     { value: 'October', label: 'October' },
//     { value: 'November', label: 'November' },
//     { value: 'December', label: 'December' },
// ];

// function PaymentCollection() {
//     const [classValue, setClassValue] = useState('');
//     const [purposeValue, setPurposeValue] = useState('');
//     const [feeValue, setFeeValue] = useState('');
//     const [selectedMonths, setSelectedMonths] = useState([]);
//     const [feeData, setFeeData] = useState([]);

//     const handleClassChange = (event) => {
//         setClassValue(event.target.value);
//     };

//     const handlePurposeChange = (event) => {
//         setPurposeValue(event.target.value);
//     };

//     const handleFeeChange = (event) => {
//         setFeeValue(event.target.value);
//     };

//     const handleMonthChange = (event) => {
//         const selectedOptions = Array.from(event.target.options)
//             .filter((option) => option.selected)
//             .map((option) => option.value);
//         setSelectedMonths(selectedOptions);
//     };

//     const handleAddFee = () => {
//         const totalFees = calculateTotalFees();

//         const newFee = {
//             class: classValue,
//             purpose: purposeValue,
//             fee: feeValue,
//             months: selectedMonths,
//             totalFees: totalFees,
//             paid: false,
//         };

//         setFeeData([...feeData, newFee]);

//         setClassValue('');
//         setPurposeValue('');
//         setFeeValue('');
//         setSelectedMonths([]);
//     };

//     const handlePayment = (index) => {
//         const updatedFeeData = [...feeData];
//         updatedFeeData[index].paid = true;
//         setFeeData(updatedFeeData);
//     };

//     const calculateTotalFees = () => {
//         let totalFees = 0;
//         for (const month of selectedMonths) {
//             totalFees += parseFloat(feeValue);
//         }
//         return totalFees.toFixed(2);
//     };

//     return (
//         <div>
//             <div>
//                 <h2>Input Section</h2>
//                 <div>
//                     <label htmlFor="class">Class:</label>
//                     <select id="class" value={classValue} onChange={handleClassChange}>
//                         <option value="">Select Class</option>
//                         {classOptions.map((option) => (
//                             <option key={option.value} value={option.value}>
//                                 {option.label}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <div>
//                     <label htmlFor="purpose">Purpose of Fee:</label>
//                     <input type="text" id="purpose" value={purposeValue} onChange={handlePurposeChange} />
//                 </div>
//                 <div>
//                     <label htmlFor="fee">Fee Amount:</label>
//                     <input type="number" id="fee" value={feeValue} onChange={handleFeeChange} />
//                 </div>
//                 <div>
//                     <label htmlFor="months">Months:</label>
//                     <select
//                         id="months"
//                         multiple
//                         value={selectedMonths}
//                         onChange={handleMonthChange}
//                     >
//                         {monthOptions.map((option) => (
//                             <option key={option.value} value={option.value}>
//                                 {option.label}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <button onClick={handleAddFee}>Add Fee</button>
//             </div>

//             <div>
//                 <h2>Fee Display Section</h2>
//                 {feeData.length > 0 ? (
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Class</th>
//                                 <th>Purpose</th>
//                                 <th>Fee Amount</th>
//                                 <th>Months</th>
//                                 <th>Total Fees</th>
//                                 <th>Status</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {feeData.map((fee, index) => (
//                                 <tr key={index}>
//                                     <td>{fee.class}</td>
//                                     <td>{fee.purpose}</td>
//                                     <td>{fee.fee}</td>
//                                     <td>{fee.months.join(', ')}</td>
//                                     <td>{fee.totalFees}</td>
//                                     <td>
//                                         {fee.paid ? (
//                                             <span>Paid</span>
//                                         ) : (
//                                             <button onClick={() => handlePayment(index)}>Pay Now</button>
//                                         )}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 ) : (
//                     <p>No fees added yet.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default PaymentCollection;



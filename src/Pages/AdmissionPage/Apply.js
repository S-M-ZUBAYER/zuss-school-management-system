import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Apply = () => {

    const { schoolName, currentSchoolCode } = useContext(AuthContext);

    const [applicationId, setApplicationId] = useState(null);
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState("Student");
    const [className, setClassName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [motherName, setMotherName] = useState('');
    const [number, setNumber] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [address, setAddress] = useState('');
    const [agentName, setAgentName] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form fields
        if (!applicationId || !name || !designation || !address || !className || !fatherName || !motherName || !phone || !email) {
            toast.error('Please fill in all fields');
            return;
        }

        try {
            // Make POST request to backend
            const response = await axios.post('http://localhost:5000/api/students', {
                applicationId,
                name,
                schoolName,
                schoolCode: currentSchoolCode,
                className,
                fatherName,
                motherName,
                designation,
                phone,
                email,
                number,
                transactionId,
                agentName,
                address
            });

            // Clear form fields
            setName('');
            setDesignation('');
            setPhone('');
            setEmail('');
            setAddress('');
            setClassName("");
            setFatherName("");
            setMotherName("");
            setTransactionId("");
            setNumber("");
            setAddress("");
            setAgentName('');

            // Show success toast
            toast.success('Staff information added successfully');
        } catch (error) {
            // Show error toast if request fails
            toast.error('Failed to add staff information');
        }
    };

    return (
        <div className=" px-10 py-10 bg-gradient-to-l from-blue-900 via-slate-900 to-black">


            <div className=" px-10 py-10 border-2  ">
                <h1 className="text-3xl  font-bold text-lime-300 mb-8">Please Input Your Information Details Information To Apply</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label htmlFor="name" className="block font-semibold  text-gray-300">
                            Application Id:
                        </label>
                        <input
                            type="text"
                            id="application id"
                            placeholder='Click to generate application id'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-10/12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="name" className="block font-semibold  text-gray-300">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder='Please Enter Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-10/12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="designation" className="block font-semibold  text-gray-300">
                            Designation:
                        </label>
                        <input
                            type="text"
                            id="designation"
                            placeholder='Please Enter Designation'
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                            className="w-10/12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="about" className="block font-semibold text-gray-300">
                            ClassName:
                        </label>
                        <input
                            id="className"
                            value={className}
                            placeholder='Please Enter ClassName'
                            onChange={(e) => setClassName(e.target.value)}
                            className="w-10/12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="about" className="block font-semibold text-gray-300">
                            Agent Number:
                        </label>
                        <input
                            id="agentNumber"
                            value={number}
                            placeholder='Please Enter Agent Number'
                            onChange={(e) => setNumber(e.target.value)}
                            className="w-10/12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <label htmlFor="about" className="block font-semibold text-gray-300">
                            Transaction Id:
                        </label>
                        <input
                            id="transaction"
                            value={transactionId}
                            placeholder='Please Enter Transaction Id'
                            onChange={(e) => setTransactionId(e.target.value)}
                            className="w-10/12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-between items-center text-white">
                        <label htmlFor="paymentMethod">Select Payment Method:</label>
                        <select className=" w-10/12 text-black py-2 rounded-lg" id="paymentMethod" value={agentName} onChange={(e) => setAgentName(e.target.value)}>
                            <option value="">Select</option>
                            <option value="Bkash">Bkash</option>
                            <option value="Nagad">Nagad</option>
                        </select>
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="about" className="block font-semibold text-gray-300">
                            Father Name:
                        </label>
                        <input
                            id="fatherName"
                            value={fatherName}
                            placeholder='Please Enter Father Name'
                            onChange={(e) => setFatherName(e.target.value)}
                            className="w-10/12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="about" className="block font-semibold text-gray-300">
                            Mother Name:
                        </label>
                        <input
                            id="motherName"
                            value={motherName}
                            placeholder='Please Enter Mother Name'
                            onChange={(e) => setMotherName(e.target.value)}
                            className="w-10/12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="phone" className="block font-semibold text-gray-300">
                            Phone:
                        </label>
                        <input
                            type="text"
                            id="phone"
                            placeholder='Please Enter Phone No'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-10/12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="email" className="block font-semibold text-gray-300">
                            Email:
                        </label>
                        <input
                            type="text"
                            id="email"
                            placeholder='Please Enter Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-10/12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-between items-center mb-8">
                        <label htmlFor="address" className="block font-semibold text-gray-300">
                            Address:
                        </label>
                        <textarea
                            id="address"
                            value={address}
                            placeholder='Please Enter Your Full Address'
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-10/12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-green-500 w-full my-24 text-white py-2 px-8 rounded-md hover:bg-green-600"
                    >
                        Apply
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Apply;

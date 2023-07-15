import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../../context/UserContext';

const AddStaff = () => {

    const { schoolName, currentSchoolCode } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [designation, setDesignation] = useState("Student");
    const [className, setClassName] = useState('');
    const [classRoll, setClassRoll] = useState('');
    const [shift, setShift] = useState('');
    const [section, setSection] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [motherName, setMotherName] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form fields
        if (!name || !designation || !phone || !email || !address || !className || !classRoll || !fatherName || !motherName) {
            toast.error('Please fill in all fields');
            return;
        }

        try {
            // Make POST request to backend
            const response = await axios.post('https://zuss-school-management-system-server.vercel.app/api/students', {
                name,
                schoolName,
                schoolCode: currentSchoolCode,
                className,
                section,
                shift,
                classRoll,
                fatherName,
                motherName,
                designation,
                phone,
                email,
                address
            });

            // Clear form fields
            setName('');
            setDesignation('');
            setPhone('');
            setEmail('');
            setAddress('');
            setClassName("");
            setClassRoll("");
            setShift("");
            setSection("");
            setFatherName("");
            setMotherName("");

            // Show success toast
            toast.success('Staff information added successfully');
        } catch (error) {
            // Show error toast if request fails
            toast.error('Failed to add staff information');
        }
    };

    return (
        <div className="my-10 px-10 py-10 md:mx-5 border-2">
            <h1 className="text-3xl font-bold text-lime-300 mb-4">Please Input New Student Information</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                        Class ROll:
                    </label>
                    <input
                        id="classRoll"
                        value={classRoll}
                        placeholder='Please Enter ClassRoll'
                        onChange={(e) => setClassRoll(e.target.value)}
                        className="w-10/12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex justify-between items-center">
                    <label htmlFor="about" className="block font-semibold text-gray-300">
                        Section:
                    </label>
                    <input
                        id="section"
                        value={section}
                        placeholder='Please Enter Section'
                        onChange={(e) => setSection(e.target.value)}
                        className="w-10/12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <label htmlFor="about" className="block font-semibold text-gray-300">
                        Shift:
                    </label>
                    <input
                        id="shift"
                        value={shift}
                        placeholder='Please Enter Shift'
                        onChange={(e) => setShift(e.target.value)}
                        className="w-10/12 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
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
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddStaff;

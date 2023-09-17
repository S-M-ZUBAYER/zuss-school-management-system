import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/UserContext";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import DisplaySpinner from "../../Shared/Spinners/DisplaySpinner";

const SalaryStatus = () => {
    const { user, teachersList, currentSchoolCode } = useContext(AuthContext);
    const [staffSalary, setStaffSalary] = useState({});
    const [staffInfo, setStaffInfo] = useState({});
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchStaffSalary = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://zuss-school-management-system-server-site.vercel.app/api/staffSalary/staff/${user?.email}`);
                const staffSalary = response.data; // Assuming the API response provides the salary data
                setStaffSalary(staffSalary);
                setLoading(false);
                // Do something with the staffSalary, such as updating state
            } catch (error) {
                console.error('Error fetching staff salary:', error);
                setLoading(false);
            }
        };



        fetchStaffSalary();
    }, [user?.email]);

    useEffect(() => {
        const fetchStaffInfo = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://zuss-school-management-system-server-site.vercel.app/api/schoolUser/${user?.email}`);
                const staffSalary = response.data; // Assuming the API response provides the salary data
                setStaffInfo(staffSalary);
                setLoading(false);
                // Do something with the staffSalary, such as updating state
            } catch (error) {
                console.error('Error fetching staff salary:', error);
                setLoading(false);
            }
        };

        fetchStaffInfo();
    }, [user?.email]);

    console.log(staffInfo)

    const filteredTeachers = teachersList.filter((teacher) =>
        teacher.email.toLowerCase().includes(user?.email.toLowerCase())
    );

    if (loading) {
        return <DisplaySpinner></DisplaySpinner>
    }

    return (
        <div className="flex flex-col items-center text-white">
            <h2 className="text-2xl font-bold mb-4">My Salary Status</h2>

            {/* <table className="border-collapse border border-gray-800">
                <thead>
                    <tr className="bg-gray-100 text-black">
                        <th className="border px-4 py-2">Teacher Name</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Teacher ID</th>
                        <th className="border px-4 py-2">Designation</th>
                        <th className="border px-4 py-2">Basic Salary</th>
                        <th className="border px-4 py-2">Medical Allowance</th>
                        <th className="border px-4 py-2">Rent</th>
                        <th className="border px-4 py-2">Others</th>
                        <th className="border px-4 py-2">Total Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTeachers.map((teacher) => (
                        <tr key={teacher.email}>
                            <td className="border px-4 py-2">{teacher.name}</td>
                            <td className="border px-4 py-2">{teacher.email}</td>
                            <td className="border px-4 py-2">{teacher.id}</td>
                            <td className="border px-4 py-2">{teacher.designation}</td>
                            <td className="border px-4 py-2">{teacher.basicSalary}</td>
                            <td className="border px-4 py-2">{teacher.medicalAllowance}</td>
                            <td className="border px-4 py-2">{teacher.rent}</td>
                            <td className="border px-4 py-2">{teacher.others}</td>
                            <td className="border px-4 py-2">{teacher.totalSalary}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}

            <div className="flex items-center justify-center p-8 space-x-8">
                <div className="max-w-1/3 text-left text-lg">
                    <img src={staffInfo.image} alt={staffInfo.name} className="w-32 h-auto rounded-lg" />
                    <h2 className="text-xl font-bold mt-4">{staffInfo.name}</h2>
                    <p><span className=" text-yellow-500 font-bold">School Name:</span> {staffInfo.schoolName}</p>
                    <p><span className=" text-yellow-500 font-bold">Email:</span> {staffInfo.email}</p>
                </div>
                <div className="max-w-1/3 text-left text-lg">
                    <h2 className="text-xl font-bold mb-4">My Salary Details</h2>
                    <p><span className=" text-yellow-500 font-bold">Name:</span> {staffSalary.name}</p>
                    <p><span className=" text-yellow-500 font-bold">Staff Email:</span> {staffSalary.staffEmail}</p>
                    <p><span className=" text-yellow-500 font-bold">Staff ID:</span> {staffSalary.staffId}</p>
                    <p><span className=" text-yellow-500 font-bold">Designation:</span> {staffSalary.designation}</p>
                    <p><span className=" text-yellow-500 font-bold">Basic Salary:</span> {staffSalary.basicSalary}</p>
                    <p><span className=" text-yellow-500 font-bold">Rent:</span> {staffSalary.rent}</p>
                    <p><span className=" text-yellow-500 font-bold">Medical Allowance:</span> {staffSalary.medicalAllowance}</p>
                    <p><span className=" text-yellow-500 font-bold">Others:</span> {staffSalary.others}</p>
                    <p><span className=" text-yellow-500 font-bold">Total Salary:</span> {staffSalary.totalSalary}</p>
                </div>


            </div>
        </div>
    );
};

export default SalaryStatus;

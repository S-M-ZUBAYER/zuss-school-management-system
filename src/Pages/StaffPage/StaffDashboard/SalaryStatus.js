import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/UserContext";

const SalaryStatus = () => {
    const { user, teachersList } = useContext(AuthContext);
    console.log(teachersList, user?.email)



    const filteredTeachers = teachersList.filter((teacher) =>
        teacher.email.toLowerCase().includes(user?.email.toLowerCase())
    );

    return (
        <div className="flex flex-col items-center text-white">
            <h2 className="text-2xl font-bold mb-4">Teacher Salary Status</h2>

            <table className="border-collapse border border-gray-800">
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
            </table>
        </div>
    );
};

export default SalaryStatus;

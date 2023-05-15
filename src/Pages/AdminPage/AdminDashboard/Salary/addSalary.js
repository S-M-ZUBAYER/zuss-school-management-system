import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../../../context/UserContext";

function AddSalary() {
    const { teachersList, setTeachersList } = useContext(AuthContext)
    // const [teachersList, setTeachersList] = useState([]);
    const [newTeacher, setNewTeacher] = useState({
        name: "",
        email: "",
        id: "",
        designation: "",
        basicSalary: 0,
        rent: 0,
        medicalAllowance: 0,
        others: 0
    });

    const handleAddTeacher = (e) => {
        e.preventDefault();
        const newTeacherList = [...teachersList, {
            ...newTeacher,
            totalSalary: newTeacher.basicSalary + newTeacher.rent + newTeacher.medicalAllowance + newTeacher?.others
        }];
        setTeachersList(newTeacherList);
        setNewTeacher({
            name: "",
            email: "",
            id: "",
            designation: "",
            basicSalary: 0,
            rent: 0,
            medicalAllowance: 0,
            others: 0
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTeacher((prevTeacher) => ({
            ...prevTeacher,
            [name]: name === "basicSalary" || name === "rent" || name === "medicalAllowance" || name === "others" ? parseInt(value) : value
        }));
    };

    const getTotalBasicSalary = () => {
        return teachersList.reduce((total, teacher) => total + teacher.basicSalary, 0);
    };

    const getTotalRent = () => {
        return teachersList.reduce((total, teacher) => total + teacher.rent, 0);
    };

    const getTotalMedicalAllowance = () => {
        return teachersList.reduce((total, teacher) => total + teacher.medicalAllowance, 0);
    };

    const getTotalSalary = () => {
        return teachersList.reduce((total, teacher) => total + teacher.totalSalary, 0);
    };

    const handleToDelete = (userEmail) => {
        //     const newList = teachersList.map(element => element?.email === userEmail);
        //     console.log(teachersList, userEmail, newList)
        // }
        const otherTeachers = teachersList.filter((teacher) => {
            return teacher.email !== userEmail;
        });
        setTeachersList(otherTeachers);
    };


    return (
        <div className="container my-5 mx-3">
            <h1 className="text-white text-3xl font-bold mt-10 mb-5">Staff Salary Input field</h1>
            <form onSubmit={handleAddTeacher} className="mx-8 mt-10 border-4">
                <div className="grid grid-cols-2 gap-4 my-4">
                    <div>
                        <label className="block text-gray-200 font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-2 py-1"
                            id="name"
                            name="name"
                            value={newTeacher.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-200 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-2 py-1"
                            id="email"
                            name="email"
                            value={newTeacher.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-200 font-bold mb-2" htmlFor="id">
                            Teacher ID
                        </label>
                        <input
                            type="text"
                            className="w-full px-2 py-1"
                            id="id"
                            name="id"
                            value={newTeacher.id}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-200 font-bold mb-2" htmlFor="designation">
                            Designation
                        </label>
                        <input
                            type="text"
                            className="w-full px-2 py-1"
                            id="designation"
                            name="designation"
                            value={newTeacher.designation}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-200 font-bold mb-2" htmlFor="basicSalary">
                            Basic Salary
                        </label>
                        <input
                            type="number"
                            className="w-full px-2 py-1"
                            id="basicSalary"
                            name="basicSalary"
                            value={newTeacher.basicSalary}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-200 font-bold mb-2" htmlFor="rent">
                            Rent
                        </label>
                        <input
                            type="number"
                            className="w-full px-2 py-1"
                            id="rent"
                            name="rent"
                            value={newTeacher.rent}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-200 font-bold mb-2" htmlFor="medicalAllowance">
                            Medical Allowance
                        </label>
                        <input
                            type="number"
                            className="w-full px-2 py-1"
                            id="medicalAllowance"
                            name="medicalAllowance"
                            value={newTeacher.medicalAllowance}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-200 font-bold mb-2" htmlFor="medicalAllowance">
                            Others
                        </label>
                        <input
                            type="number"
                            className="w-full px-2 py-1"
                            id="others"
                            name="others"
                            value={newTeacher?.others}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-span-2 mx-8">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline mt-10 mb-10"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </form>
            <div className="mt-20 mb-10 mx-5">
                <h1 className="text-white text-3xl font-bold mt-10 mb-5">All Staff Salary Status</h1>
                <table className="table-auto w-full text-white">
                    <thead>
                        <tr className=" bg-amber-300 text-black">
                            <th className="px-4 py-2">Teacher Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Teacher ID</th>
                            <th className="px-4 py-2">Designation</th>
                            <th className="px-4 py-2">Basic Salary</th>
                            <th className="px-4 py-2">Rent</th>
                            <th className="px-4 py-2">Medical Allowance</th>
                            <th className="px-4 py-2">Others</th>
                            <th className="px-4 py-2">Total Salary</th>
                            <th className="px-4 py-2">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachersList.map((teacher, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{teacher.name}</td>
                                <td className="border px-4 py-2">{teacher.email}</td>
                                <td className="border px-4 py-2">{teacher.id}</td>
                                <td className="border px-4 py-2">{teacher.designation}</td>
                                <td className="border px-4 py-2">{teacher.basicSalary}</td>
                                <td className="border px-4 py-2">{teacher.rent}</td>
                                <td className="border px-4 py-2">{teacher.medicalAllowance}</td>
                                <td className="border px-4 py-2">{teacher?.others}</td>
                                <td className="border px-4 py-2">{teacher.totalSalary}</td>
                                <td className="border px-4 py-2 hover:cursor-pointer" onClick={() => handleToDelete(teacher?.email)} >delete</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="bg-gray-100 text-black">
                            <td className="border px-4 py-2"></td>
                            <td className="border px-4 py-2"></td>
                            <td className="border px-4 py-2"></td>
                            <td className="border px-4 py-2"></td>
                            <td className="border px-4 py-2"></td>
                            <td className="border px-4 py-2"></td>
                            <td className="border px-4 py-2"></td>
                            <td className="border px-4 py-2 font-bold">Total:</td>
                            <td className="border px-4 py-2 font-bold">
                                {teachersList.reduce((total, teacher) => total + Number(teacher.totalSalary), 0)}
                            </td>
                            <td className="border px-4 py-2 font-bold"></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default AddSalary;


